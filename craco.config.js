module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Если свойство extensionsToTreatAsEsm равно ровно ['.js'], удаляем его.
      if (
        Array.isArray(jestConfig.extensionsToTreatAsEsm) &&
        jestConfig.extensionsToTreatAsEsm.length === 1 &&
        jestConfig.extensionsToTreatAsEsm[0] === '.js'
      ) {
        delete jestConfig.extensionsToTreatAsEsm;
      }
      const newJestConfig = { ...jestConfig };

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