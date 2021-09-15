import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  /** The FormGroup the multi-select belongs to. */
  @Input() form: FormGroup;

  /** The name of the multi-select field in the FormGroup. */
  @Input() fieldName: string;

  /** The list of valid values. */
  @Input() values: string[];

  /** Whether to disable the selection. */
  @Input() disabled = false;

  /** Show/hide multi-select dropdown. */
  showList = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Get the control out of the FormGroup.
   */
  get controls(): AbstractControl[] {
    const fa = this.form.get(this.fieldName) as FormArray;
    return fa.controls;
  }

  /**
   * Returns true if FormArray contains the value.
   *
   * @param value
   */
  has(value: string): boolean {
    const items = this.form.get(this.fieldName) as FormArray;
    return items.value.includes(value);
  }

  /**
   * Add/remove string item from FormArray.
   *
   * @param value
   */
  toggle(value: string): void {
    const items = this.form.get(this.fieldName) as FormArray;

    const included = items.value.includes(value);
    if (!included) {
      items.push(new FormControl(value));
    } else {
      const index = items.value.findIndex(i => i === value);
      items.removeAt(index);
    }
  }

}
