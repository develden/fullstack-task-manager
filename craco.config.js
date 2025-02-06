module.exports = {
  jest: {
    configure: (jestConfig) => {
      const { extensionsToTreatAsEsm, ...newJestConfig } = jestConfig;
      // Принудительно задаем пустой массив для extensionsToTreatAsEsm,
      // чтобы перекрыть установку по умолчанию.
      newJestConfig.extensionsToTreatAsEsm = [];
      
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