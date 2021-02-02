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

  citizenship_status = new FormControl(0, [Validators.required]);
  state = new FormControl(0, [Validators.required]);
  bioChildren = new FormControl(0, [Validators.required]);
  birth_control = new FormControl(0, [Validators.required]);

  gcform: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl(''),
    city: new FormControl(''),
    state_fill: new FormControl(''),
    outside_USA: new FormControl(''),
    zip_code: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    height_in: new FormControl('', Validators.required),
    height_feet: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    Asian_mother: new FormControl(false),
    Asian_father: new FormControl(false),
    Black_mother: new FormControl(false),
    Black_father: new FormControl(false),
    Latino_mother: new FormControl(false),
    Latino_father: new FormControl(false),
    Native_mother: new FormControl(false),
    Native_father: new FormControl(false),
    German_mother: new FormControl(false),
    German_father: new FormControl(false),
    French_mother: new FormControl(false),
    French_father: new FormControl(false),
    Irish_mother: new FormControl(false),
    Irish_father: new FormControl(false),
    Italian_mother: new FormControl(false),
    Italian_father: new FormControl(false),
    Pacific_mother: new FormControl(false),
    Pacific_father: new FormControl(false),
    Cherokee_mother: new FormControl(false),
    Cherokee_father: new FormControl(false),
    Caucasian_mother: new FormControl(false),
    Caucasian_father: new FormControl(false),
    Other_mother: new FormControl(false),
    Other_father: new FormControl(false),
    other_ethnic: new FormControl(''),
    tribal_laws: new FormControl(0),
    drivers_license: new FormControl(0),
    transportation: new FormControl(0),
    relationship: new FormControl(''),
    marital_status: new FormControl(0),
    other_citizenship: new FormControl(''),
    spouse_name: new FormControl(''),
    email: new FormControl('', Validators.required),
    spouse_email: new FormControl(''),
    number_pregnancies: new FormControl('', Validators.required),
    abortion: new FormControl(0),
    date_abortion: new FormControl(''),
    Occupation: new FormControl(''),
    pregnancies: new FormControl(0),
    explain_pregnancies: new FormControl(''),
    complications: new FormControl(0),
    explain_complications: new FormControl(''),
    recent_delivery: new FormControl(0),
    breastfeeding: new FormControl(0),
    explain_breastfeeding: new FormControl(''),
    explain_method: new FormControl(''),
    endometrial: new FormControl(0),
    IUD_dateinserted: new FormControl(''),
    IUD_dateremoved: new FormControl(''),
    Copper_dateinserted: new FormControl(''),
    Copper_dateremoved: new FormControl(''),
    Depo_dateinserted: new FormControl(''),
    Depo_dateremoved: new FormControl(''),
    Arm_dateinserted: new FormControl(''),
    Arm_dateremoved: new FormControl(''),
    anti_depression: new FormControl(0),
    explain_medication: new FormControl(''),
    smoke: new FormControl('', Validators.required),
    explain_smoke: new FormControl(''),
    alcoholic: new FormControl(''),
    explain_alcohol: new FormControl(''),
    health: new FormControl(0),
    explain_health: new FormControl(''),
    Ovarian_Cystectomy_yes: new FormControl(false),
    Ovarian_Cystectomy_no: new FormControl(false),
    Fibroid_Removal_yes: new FormControl(false),
    Fibroid_Removal_no: new FormControl(false),
    Salpingectomy_yes: new FormControl(false),
    Salpingectomy_no: new FormControl(false),
    Oophorectomy_yes: new FormControl(false),
    Oophorectomy_no: new FormControl(false),
    Other_yes: new FormControl(false),
    Other_no: new FormControl(false),
    explain_organs: new FormControl(''),
    migraine: new FormControl(''),
    explain_migraine: new FormControl(''),
    asthmatic: new FormControl(''),
    explain_asthmatic: new FormControl(''),
    diabetes: new FormControl(0),
    explain_diabetes: new FormControl(''),
    diagnosed: new FormControl(0),
    last_diagnosed: new FormControl(0),
    explain_diagnosed: new FormControl(''),
    felony: new FormControl(0),
    partner_felony: new FormControl(0),
    explain_felony: new FormControl(''),
    hear: new FormControl(0),
    explain_hear: new FormControl(''),
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
