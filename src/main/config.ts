import * as fs from 'fs';

export default class Config {
  private static CONFIG_FILE = 'launcher-config.json';

  ryuPath: string = '';

  romPath: string = '';

  sdcardPath: string = '';

  private static createFile() {
    if (!fs.existsSync(Config.CONFIG_FILE)) {
      const configStr = JSON.stringify({
        ryuPath: null,
        romPath: null,
        sdcardPath: null,
      });
      fs.writeFileSync(Config.CONFIG_FILE, configStr);
    }
  }

  private static readFile(): Config {
    // create the file if necessary
    Config.createFile();

    // read the file
    return JSON.parse(fs.readFileSync(Config.CONFIG_FILE, 'utf-8')) as Config;
  }

  private static saveConfig(config: Config) {
    fs.writeFileSync(Config.CONFIG_FILE, JSON.stringify(config));
  }

  static getRomPath() {
    const config = Config.readFile();
    return config.romPath;
  }

  static setRomPath(path: string) {
    const config = Config.readFile();
    config.romPath = path;
    Config.saveConfig(config);
  }

  static getRyuPath() {
    const config = Config.readFile();
    return config.ryuPath;
  }

  static setRyuPath(path: string) {
    const config = Config.readFile();
    config.ryuPath = path;
    Config.saveConfig(config);
  }

  static getSdcardPath() {
    const config = Config.readFile();
    return config.sdcardPath;
  }

  static setSdcardPath(path: string) {
    const config = Config.readFile();
    config.sdcardPath = path;
    Config.saveConfig(config);
  }

  private constructor() {}
}
