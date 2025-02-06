module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Разрешаем транспиляцию пакета axios, находящегося в node_modules
      jestConfig.transformIgnorePatterns = ["<rootDir>/node_modules/(?!(axios)/)"];
      // Сообщаем, что файлы с расширением .js следует обрабатывать как ES-модули
      jestConfig.extensionsToTreatAsEsm = [".js"];

      if (!jestConfig.transform) {
        jestConfig.transform = {};
      }
      // Трансформация файлов .mjs через babel-jest
      jestConfig.transform["^.+\\.mjs$"] = "babel-jest";
      // Трансформация файлов .js, .jsx, .ts и .tsx через babel-jest
      jestConfig.transform["^.+\\.[jt]sx?$"] = "babel-jest";

      return jestConfig;
    }
  },
  // Дополнительные настройки для Webpack, если понадобятся
}; 