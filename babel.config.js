module.exports = function config(api) {
    const presets = [
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3
            }
        ]
    ];
    const plugins = [
        [
            '@babel/plugin-transform-react-jsx',
            {
                pragma: 'MyReact.createElement',
                pragmaFrag: 'MyReact.Fragment'
            }
        ]
    ];

    api.cache(true);
    return {
        presets,
        plugins
    };
};
