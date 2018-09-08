import { observable, action } from 'mobx';

class UIStore {
    @observable isSidebarActive: boolean = true;
    
    @action toggleSidebar() {
        this.isSidebarActive = !this.isSidebarActive;
    }
}

export default new UIStore();