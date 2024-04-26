import { _decorator, Component, Label, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('script1')
export class script1 extends Component {
    @property({type:Label})
    label: Label = null;
    
    start() {
        resources.load()

    }

    update(deltaTime: number) {
        
    }

    onClick(){

    }
}

