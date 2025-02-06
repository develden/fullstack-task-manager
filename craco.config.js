module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Используем паттерн, который позволяет обрабатывать модуль axios из node_modules
      jestConfig.transformIgnorePatterns = ["/node_modules/(?!axios)"];
      
      if (!jestConfig.transform) {
        jestConfig.transform = {};
      }
      
      // Обработка файлов .mjs через babel-jest
      jestConfig.transform["^.+\\.mjs$"] = "babel-jest";
      // Обработка файлов .js, .jsx, .ts, .tsx через babel-jest
      jestConfig.transform["^.+\\.[jt]sx?$"] = "babel-jest";
      
      return jestConfig;
    },
  },
  // Дополнительные настройки для Webpack, если понадобятся
}; 