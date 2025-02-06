module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Удаляем ключ extensionsToTreatAsEsm напрямую из переданного объекта jestConfig,
      // чтобы предотвратить его повторное добавление из базового конфига react‑scripts.
      if (jestConfig.extensionsToTreatAsEsm) {
        delete jestConfig.extensionsToTreatAsEsm;
      }

      const newJestConfig = jestConfig;

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