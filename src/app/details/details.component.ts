import { Component } from "@angular/core";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styles: [`
        .changeColor{
            color: white;
        }

        .display{
            display: none;
        }
    `],
})
export class DetailsComponent {
    showDetails = false;
    detailsCounter = 0;

    clickShowDetails()
    {
        this.showDetails = !this.showDetails;
        this.detailsCounter++;
    }

    getColor()
    {
        return this.detailsCounter > 5 ? '#b3cde0' : 'white';
    }
}