declare type JsObject = Record<string, any>
declare type Methods = Record<string, function>

declare namespace WxPage {

  type BaseProps<D = {}> = {

    setData(
      data: D | Partial<D>,
      callback?: () => void,
    ): void;

    readonly route: string;

    /**
     * 一种空页面，用于兼容以前的老路径
     */
    dummyIndex: boolean;
  }

  interface LifeCycle<D = {}> {

    /**
     * 页面加载完毕
     * @param query
     */
    onLoad?(
      query?: {
        sence: number,
        [queryKey: string]: string
      }
    ): void

    onShow?(): void;

    onReady?(): void;

    onHide?(): void;

    onUnload?(): void;
  }

  interface DefaultEvents<D = {}> {

    onPullDownRefresh?(): void;

    onReachBottom?(): void;

    onShareAppMessage?(
      options?: any,
    ): void;

    onPageScroll?(
      options?: any,
    ): void;

  }

  interface IRegister<D = {}> extends LifeCycle<D>, DefaultEvents<D> { }
  class Register<D = {}> implements IRegister {
    constructor() { }

    data: Readonly<D>;

    setData(
      data: D | Partial<D>,
      callback?: () => void,
    ): void;

    /**
     * 当前页面路径
     */
    readonly route: string;

    /**
     * 一种空页面，用于兼容以前的老路径
     */
    dummyIndex: boolean;
  }

  type Options<D = {}, T = {}> = Page.IRegister<D> & T & ThisType<Page.IRegister<D> & T & Page.BaseProps<D>>
}

interface PageConstructor {
  <D = {}, T = {}>(
    options: Page.Options<D, T>,
  ):  void;
}

declare const Page: PageConstructor
declare function getCurrentPages< D = {}, T = {}>(): [Page.IRegister<D> & T & Page.BaseProps<D>]
