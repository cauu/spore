import { StatusCode, SporeEvent } from './model/constants';

declare const window: any

/**
 * @todo 
 * 首先假定所有的应用都采用hashhistory路由
 * 并且都采用React-router
 */
const apps: any[] = [];

window.spore = window.spore || {};

class Spore {
  constructor() {
    window.spore.instance = this;
  }

  registerSPA(
    appName: string,
    appConfig?: any,
    activeWhen?: {},
    customProps?: {}
  ) {
    const appOpt = {
      name: appName,
      appConfig,
      activeWhen,
      mode: '',
      status: '',
      switchMode: '',
      customProps
    };

    apps.push(appOpt);
    window.apps = apps;
  }

  start() {
    window.addEventListener(SporeEvent.ROUTING_NAVIGATE, (event) => {
      if (event.detail) {
        /**
         * @todo 
         * 如果子系统的路由发生了改变,
         * 会通知thrunk进行重新渲染
         */
      }
    });

    return this.reRouter();
  }

  reRouter() {
    /**
     * @desc
     * 当主项目监听到路由发生变化时，会调用reroute函数,
     * 卸载不满足路由条件的应用，并加载正确的应用
     */
  }
};

export default Spore;