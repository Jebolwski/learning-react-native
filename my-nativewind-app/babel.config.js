module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // or 'module:metro-react-native-babel-preset' if using React Native CLI
    plugins: ["nativewind/babel"],
  };
};
