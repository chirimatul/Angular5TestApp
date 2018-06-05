import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent {

 
  playerForm: FormGroup;
  player: Player;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService) {
    this.player = playerService.getPlayers()[0];
    this.createForm();
    //this.logNameChange();
  }

  createForm() {
    this.playerForm = this.fb.group({
      fName: [this.player.fName, Validators.required],
      lName: this.player.lName
    });
  }

  // ngOnChanges() {
  //   this.rebuildForm();
  // }

  rebuildForm() {
    this.playerForm.reset({
      fName: this.player.fName,
      lName:this.player.lName
    });
    //this.setAddresses(this.hero.addresses);
  }

  // get secretLairs(): FormArray {
  //   return this.heroForm.get('secretLairs') as FormArray;
  // };

  // setAddresses(addresses: Address[]) {
  //   const addressFGs = addresses.map(address => this.fb.group(address));
  //   const addressFormArray = this.fb.array(addressFGs);
  //   this.heroForm.setControl('secretLairs', addressFormArray);
  // }

  // addLair() {
  //   this.secretLairs.push(this.fb.group(new Address()));
  // }

  onSubmit() {
    debugger
    let updatePlayer = this.prepareSaveHero();
    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    // this.rebuildForm();
  }

  prepareSaveHero(): Player {
    const formModel = this.playerForm.value;

    // deep copy of form model lairs
    // const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
    //   (address: Address) => Object.assign({}, address)
    // );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const updatedPlayer : Player = {
      id: this.player.id,
      fName: formModel.fName as string,
      lName: formModel.lName as string,
      game: this.player.game,
      dob: this.player.dob
      // addresses: formModel.secretLairs // <-- bad!
      //addresses: secretLairsDeepCopy
    };
    return updatedPlayer;
  }

  revert() { this.rebuildForm(); }

  // logNameChange() {
  //   const nameControl = this.heroForm.get('name');
  //   nameControl.valueChanges.forEach(
  //     (value: string) => this.nameChangeLog.push(value)
  //   );
  // }
}
