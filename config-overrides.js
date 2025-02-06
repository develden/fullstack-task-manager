module.exports = {
  // Если нужен патч для Webpack, здесь можно добавить изменения.
  // Пока оставляем конфигурацию webpack без изменений.
  
  // Переопределяем настройки Jest
  jest: function(config) {
    // Добавляем axios в список модулей, которые нужно транслировать
    config.transformIgnorePatterns = ['node_modules/(?!(axios)/)'];
    return config;
  },
}; 