import {
    _decorator,
    assetManager,
    Component,
    ImageAsset,
    instantiate,
    Node,
    Prefab,
    resources,
    Sprite,
    SpriteFrame,
    Texture2D,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("customScript")
export class customScript extends Component {
    @property({ type: Sprite })
    imG: Sprite = null;
    start() {
        // resources.preload("prefabs/nodePrefab", Prefab);
        if (!this.imG) return;
        let remoteUrl =
            "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/luffy-is-grinning-in-the-movie.jpg";
        assetManager.loadRemote(remoteUrl, (err, img: ImageAsset) => {
            console.log("Image", img);
            console.log("Error", err);
            const spriteFrame = new SpriteFrame();
            const texture = new Texture2D();
            texture.image = img;
            spriteFrame.texture = texture;
            this.imG.spriteFrame = spriteFrame;
        });
    }

    update(deltaTime: number) {}
    onClick() {
        const before = Date.now();
        for (let i = 0; i < 4; i++) {
            resources.load("prefabs/nodePrefab", Prefab, null, (err, prefab) => {
                console.log(typeof prefab);
                console.log(prefab);
                const newNode = instantiate(prefab);
                this.node.getParent().addChild(newNode);
            });
        }
        const after = Date.now();
        console.log(after - before);
    }

    // onClick() {
    //     resources.load("person/person1/spriteFrame", SpriteFrame, null, (err, spriteFrame) => {
    //         console.log("frame: ", spriteFrame);
    //         console.log(err);
    //         // this.node.getComponent(Sprite).spriteFrame = spriteFrame;
    //         this.person.spriteFrame = spriteFrame;
    //     });
    // }
}
