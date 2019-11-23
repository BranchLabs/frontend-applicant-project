import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page, Card, Button } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

const Home = () => (
 <AppProvider i18n={enTranslations}>
  <Page title='Branch Labs - Spreadsheet'>
   <Card sectioned>
    <Button onClick={() => alert("Button clicked!")}>Example button</Button>
   </Card>
  </Page>
 </AppProvider>
);

export default Home;
