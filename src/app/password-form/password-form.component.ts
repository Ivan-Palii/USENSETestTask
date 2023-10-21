import { Component } from '@angular/core';

const DEFAULT_COLOR = 'lightgray';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  bars: string[] = [DEFAULT_COLOR, DEFAULT_COLOR, DEFAULT_COLOR];
  password: string = '';
  message: string = ''
  passwordStrength: number = 0;

  onInput(e: any) {
    this.password = e.target.value;
    console.log(this.password);
    this.checkPassword();
    this.setBarColors();
  }

  checkPassword() {
    if (this.password.length === 0) {
      this.passwordStrength = 0;
      return;
    }

    const length = /^\S{1,8}$/.test(this.password);

    if (length) {
      this.passwordStrength = 1;
      return;
    }

    const letters = /[a-zA-Z]/.test(this.password);
    const numbers = /[0-9]/.test(this.password);
    const symbols = /[$-/:-?{-~!"^_@`\[\]]/g.test(this.password);

    const flagsIndex: number = [letters, numbers, symbols].reduce((a, b) => {
      return a + (b ? 1 : 0);
    }, 0);

    this.passwordStrength = flagsIndex + 1;
  }

  setBarColors() {
    let color: string;

    switch (this.passwordStrength) {
      case 0:
        color = DEFAULT_COLOR;
        this.message = ''
        break;
      case 1:
        color = 'darkred';
        this.message = 'Password is too short'
        break;
      case 2:
        color = 'darkred';
        this.message = 'Password is easy'
        break;
      case 3:
        color = 'yellow';
        this.message = 'Password is medium'
        break;
      case 4:
        color = 'green';
        this.message = 'Password is strong'
        break;
      default:
        color = DEFAULT_COLOR;
    }

    this.bars = this.bars.map((value, index) => {
      if (this.passwordStrength === 1) return color
      if (index <= this.passwordStrength - 2) return color;
      else return DEFAULT_COLOR;
    });
  }
}
