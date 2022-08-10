import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {
  celcius: any;
  farenheit: any;

  ngOnInit(): void {
  }

  changeTemperature(val: any, type: string) {
    if (val) {
      if (type === 'celcius') {
        const updatedFahrenheit = ((val * 9 / 5) + 32);
        this.farenheit = updatedFahrenheit;
      } else {
        const updatedCelcius = ((val - 32) * (5 / 9));
        this.celcius = updatedCelcius;
      }
    }
  }
}
