import * as path from 'path';
import * as fs from 'fs';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StatoscopePlugin from '@statoscope/webpack-plugin';

// Load translations from the i18n.json file
const translations = JSON.parse(fs.readFileSync('i18n.json', 'utf8'));

const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        app: './src/pages/root2.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader', // webpack use loaders in reverse order
                    {
                        loader: 'i18n-loader',
                        options: {
                            translations,
                        },
                    },
                ],
            },
        ],
    },
    resolveLoader: {
        alias: {
            'i18n-loader': path.resolve(__dirname, 'loaders/i18n-loader.cjs'),
        },
    },
    stats: 'minimal', // make sure log is minimal
};

export default config;
