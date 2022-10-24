import Head from "next/head";
import React from "react";
import { BorderDivide } from "..";
import Layout from "../../components/layout";
import FilterSelect from "../../components/list-filter";
import ListHeader from "../../components/list-header";
import SalonList from "../../components/salon-list";
import { getAllSalons } from "../api/mdApi";

function HairTimeList({ salons }) {
  const filterValues = ["Price $25 - $50"];
  return (
    <>
      <Layout>
        <Head>
          <title>Salons | Hår</title>
        </Head>
        <BorderDivide>
          <ListHeader header='Hår' url='/' />
        </BorderDivide>
        <BorderDivide>
          <FilterSelect filterValues={filterValues} />
        </BorderDivide>
        <SalonList salons={salons} />
      </Layout>
    </>
  );
}

export default HairTimeList;

export const getStaticProps = async () => {
  const salons = getAllSalons([
    "title",
    "rating",
    "reviews",
    "street",
    "location",
    "openingHours",
    "availableBooking",
    "slug",
  ]);
  return {
    props: {
      salons,
    },
  };
};
