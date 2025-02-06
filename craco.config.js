module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Создаем новую конфигурацию без свойства extensionsToTreatAsEsm,
      // даже если оно задано через прототипную цепочку.
      const { extensionsToTreatAsEsm, ...newJestConfig } = jestConfig;
      
      // Используем паттерн, который позволяет обрабатывать модуль axios из node_modules
      newJestConfig.transformIgnorePatterns = ["/node_modules/(?!axios)"];
      
      if (!newJestConfig.transform) {
        newJestConfig.transform = {};
      }
      
      // Обработка файлов .mjs через babel-jest
      newJestConfig.transform["^.+\\.mjs$"] = "babel-jest";
      // Обработка файлов .js, .jsx, .ts, .tsx через babel-jest
      newJestConfig.transform["^.+\\.[jt]sx?$"] = "babel-jest";
      
      return newJestConfig;
    },
  },
  // Дополнительные настройки для Webpack, если понадобятся
}; 