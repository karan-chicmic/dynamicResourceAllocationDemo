import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("customScript")
export class customScript extends Component {
    start() {
        resources.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
            console.log("frame: ", spriteFrame);
            console.log(err);
            this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        });
    }

    update(deltaTime: number) {}
}
