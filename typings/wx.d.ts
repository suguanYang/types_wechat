/**
 * Why use namespace? // `why not module?`
 * - 1, Semantically speaking, wx is a namespace for developer to invoke it's method or property
 *      like Math object, it is already exsited in global scope, so only declaration not definition
 * - 2, Can reduce the amount of code, module need import
 * - 3, Namespace is a way to manage objects relationship, some `Types` are isolated
 *      with orthers, need some namespace to distinguish them
 */

declare namespace wx {

  function getUpdateManager(): Update.Manager

  function showModal(p: Modal.Options): void

  function showToast(p: Toast.Options): void
}

declare namespace wx.Modal {
  type SuccessResponse = {
    confirm: boolean
  }

  interface Options {
    title: string,
    content: string,
    success(res: SuccessResponse): void
  }
}

declare namespace wx.Update {
  type onCheckResponse = {
    hasUpdate: boolean
  }

  type Manager = {
    onCheckForUpdate(cb: (res: onCheckResponse) => void): void,
    onUpdateReady(cb: () => void): void,
    onUpdateFailed(cb: () => void): void,
    applyUpdate(): void
  }
}

declare namespace wx.Toast {
  interface Options {
    icon: String,
    title: String,
  }
}
