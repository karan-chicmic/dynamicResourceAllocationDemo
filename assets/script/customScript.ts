import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("customScript")
export class customScript extends Component {
    @property({ type: Sprite })
    person: Sprite = null;
    start() {}

    update(deltaTime: number) {}

    onClick() {
        resources.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
            console.log("frame: ", spriteFrame);
            console.log(err);
            // this.node.getComponent(Sprite).spriteFrame = spriteFrame;
            this.person.spriteFrame = spriteFrame;
        });
    }
}
