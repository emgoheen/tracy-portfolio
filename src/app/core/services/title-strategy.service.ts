import { VERSION } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

export class PortfolioTitlePageStrategy extends TitleStrategy{
    override updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);
        if(title !== undefined){
            document.title = `${title} ${VERSION.full}`;
        }
        else{
            document.title = `Emily's Portfolio ${VERSION.full}`;
        }
    }
}