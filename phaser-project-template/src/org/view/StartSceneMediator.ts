import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import StartScene from "./scenes/start/StartScene"
import {SceneEvent} from "../../Game"
import GameProxy from "../model/GameProxy"

export default class StartSceneMediator extends Mediator implements IMediator {
  public static NAME: string = "start_scene_mediator"

  constructor(viewComponent: any) {
    super(StartSceneMediator.NAME, viewComponent)
    // (在构造函数中注册场景事件，防止其他地方二次注册场景事件)
    // 场景系统破坏事件
    this.scene.events.on(Phaser.Scenes.Events.DESTROY, this.scene.destoryListener, this.scene)
    // 场景系统关闭事件()
    this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, this.scene.shutdownListener, this.scene)
    this.scene.events.on(SceneEvent.INIT_COMPLETE, this.initComplete, this)
    this.scene.events.on(SceneEvent.CREATE_COMPLETE, this.createdComplete, this)
  }

  private initComplete() {
    let gameProxy: GameProxy = this.facade["retrieveProxy"](GameProxy.NAME) as GameProxy
  }

  private createdComplete() {
    this.scene.sceneIn()
  }

  public listNotificationInterests(): string[] {
    return []
  }

  public handleNotification(notification: INotification): void {
    switch (notification.getName()) {
      default:
        break
    }
  }

  get scene(): StartScene {
    return (this.viewComponent as StartScene)
  }
}