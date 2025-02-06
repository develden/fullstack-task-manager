module.exports = {
  jest: {
    configure: (jestConfig) => {
      // Создаем копию конфигурации
      const newJestConfig = { ...jestConfig };

      // Если extensionsToTreatAsEsm задан и представляет массив,
      // удаляем из него значение ".js"
      if (newJestConfig.extensionsToTreatAsEsm && Array.isArray(newJestConfig.extensionsToTreatAsEsm)) {
        newJestConfig.extensionsToTreatAsEsm = newJestConfig.extensionsToTreatAsEsm.filter(ext => ext !== '.js');
        // Если после фильтрации массив пуст, удаляем всё свойство
        if (newJestConfig.extensionsToTreatAsEsm.length === 0) {
          delete newJestConfig.extensionsToTreatAsEsm;
        }
      }

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