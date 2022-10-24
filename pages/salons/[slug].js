import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import markdownToHtml from "../api/markdownToHtml";
import { getAllSalons, getSalonBySlug } from "../api/mdApi";
import SalonContent from "../../components/salon-content";
import SalonHeader from "../../components/salon-header";
import TabItem from "../../components/tab-item";
import Tabs from "../../components/tabs";

const Page = styled.div``;

function Salon({ salon }) {
  const { title, coverImage, rating, reviews, ...salonInfo } = salon
    ? salon
    : undefined;
  const [activeTab, setActiveTab] = useState("Info");
  return (
    <>
      <Layout>
        <Head>Salon | {title}</Head>
        <Page>
          <SalonHeader salonHeader={{ title, coverImage, rating, reviews }} />
          <Tabs>
            <TabItem
              isActive={activeTab === "Info"}
              onClick={(val) => setActiveTab(val)}
            >
              Info
            </TabItem>
            <TabItem
              isActive={activeTab === "Schedule"}
              onClick={(val) => setActiveTab(val)}
            >
              Schedule
            </TabItem>
          </Tabs>
          <SalonContent salonInfo={salonInfo} />
        </Page>
      </Layout>
    </>
  );
}

export default Salon;

export async function getStaticProps({ params }) {
  const salon = getSalonBySlug(params.slug, [
    "title",
    "rating",
    "reviews",
    "location",
    "openingHours",
    "tel",
    "domain",
    "coverImage",
    "content",
    "slug",
  ]);
  const content = await markdownToHtml(salon.content || "");
  return {
    props: {
      salon: {
        ...salon,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const salons = getAllSalons(["slug"]);

  return {
    paths: salons.map((salon) => {
      return {
        params: {
          slug: salon.slug,
        },
      };
    }),
    fallback: false,
  };
}
