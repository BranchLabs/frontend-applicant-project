import React from 'react';
import App from 'next/app';
import { DataProvider } from '../src/DataContext';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Frame } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

/*
 * Using _app component to wrap the entire
 * application with reusable components.
 */

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<AppProvider i18n={enTranslations}>
				<Frame>
					<DataProvider>
						<Component {...pageProps} />
					</DataProvider>
				</Frame>
				<style global jsx>{`
					.Polaris-Card {
						margin-bottom: 20px;
					}

					.Polaris-Frame__Skip {
						display: none;
					}
				`}</style>
			</AppProvider>
		);
	}
}

export default MyApp;
