import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-gestationalcarrier',
  templateUrl: './gestationalcarrier.component.html',
  styleUrls: ['./gestationalcarrier.component.css']
})
export class GestationalcarrierComponent implements OnInit {

  showForm: boolean = true;
  TotalRow: number;
  Form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.Form = this._fb.group({
      delivery_historys: this._fb.array([this.initDeliveryHistorys()],)
    });
  }

  initDeliveryHistorys() {
    return this._fb.group({
      surrogacy: [''],
      birthDate: [''],
      vaginal: [''],
      birthWeight: [''],
      number: ['']
    });
  }

  addNewRow() {
    const control = <FormArray>this.Form.controls['delivery_historys'];
    control.push(this.initDeliveryHistorys());
  }

  deleteRow(index: number) {
    const control = <FormArray>this.Form.controls['delivery_historys'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  gcform: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl(0, Validators.required),
    outside_USA: new FormControl('', Validators.required),
    zip_code: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    ethnic: new FormControl('', Validators.required),
    other_ethnic: new FormControl('', Validators.required),
    tribal_laws: new FormControl(0, Validators.required),
    drivers_license: new FormControl(0, Validators.required),
    transportation: new FormControl(0, Validators.required),
    relationship: new FormControl(0, Validators.required),
    marital_status: new FormControl(0, Validators.required),
    citizenship_status: new FormControl(0, Validators.required),
    other_citizenship: new FormControl('', Validators.required),
    spouse_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    spouse_email: new FormControl('', Validators.required),
    bioChildren: new FormControl(0, Validators.required),
    number_pregnancies: new FormControl('', Validators.required),
    abortion: new FormControl(0, Validators.required),
    date_abortion: new FormControl('', Validators.required),
    Occupation: new FormControl('', Validators.required),
    pregnancies: new FormControl(0, Validators.required),
    explain_pregnancies: new FormControl('', Validators.required),
    complications: new FormControl(0, Validators.required),
    explain_complications: new FormControl('', Validators.required),
    recent_delivery: new FormControl(0, Validators.required),
    breastfeeding: new FormControl(0, Validators.required),
    explain_breastfeeding: new FormControl('', Validators.required),
    birth_control: new FormControl(0, Validators.required),
    explain_method: new FormControl('', Validators.required),
    endometrial: new FormControl(0, Validators.required),
    IUD_dateinserted: new FormControl('', Validators.required),
    IUD_dateremoved: new FormControl('', Validators.required),
    Copper_dateinserted: new FormControl('', Validators.required),
    Copper_dateremoved: new FormControl('', Validators.required),
    Depo_dateinserted: new FormControl('', Validators.required),
    Depo_dateremoved: new FormControl('', Validators.required),
    Arm_dateinserted: new FormControl('', Validators.required),
    Arm_dateremoved: new FormControl('', Validators.required),
    anti_depression: new FormControl(0, Validators.required),
    explain_medication: new FormControl('', Validators.required),
    smoke: new FormControl('', Validators.required),
    explain_smoke: new FormControl('', Validators.required),
    alcoholic: new FormControl('', Validators.required),
    explain_alcohol: new FormControl('', Validators.required),
    health: new FormControl(0, Validators.required),
    explain_health: new FormControl('', Validators.required),
    organs: new FormControl(0, Validators.required),
    explain_organs: new FormControl('', Validators.required),
    migraine: new FormControl('', Validators.required),
    explain_migraine: new FormControl('', Validators.required),
    asthmatic: new FormControl('', Validators.required),
    explain_asthmatic: new FormControl('', Validators.required),
    diabetes: new FormControl(0, Validators.required),
    explain_diabetes: new FormControl('', Validators.required),
    diagnosed: new FormControl(0, Validators.required),
    last_diagnosed: new FormControl(0, Validators.required),
    explain_diagnosed: new FormControl('', Validators.required),
    felony: new FormControl(0, Validators.required),
    partner_felony: new FormControl(0, Validators.required),
    explain_felony: new FormControl('', Validators.required),
    hear: new FormControl(0, Validators.required),
    explain_hear: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.gcform.valid) {
      console.log("Form Submitted!", this.gcform.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }

}
