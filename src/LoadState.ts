import MenuState from './MenuState.ts';
import { alto, ancho } from './dimens.ts';

import childrenLogoPath from './assets/logo-children.png';
import casasBgPath from './assets/casas_bg.png';
import GameBackground1Path from './assets/bg1.png';

import cepilloIconPath from './assets/index_menu/cepillo dental.png';
import doctorIconPath from './assets/index_menu/doctor.png';
import manosIconPath from './assets/index_menu/manos.png';
import libroIconPath from './assets/index_menu/libro.png';
import mujerHombreIconPath from './assets/index_menu/mujer hombre.png';

import hogares1ButtonPath from './assets/index_menu/hogares 1.png';
import hogares2ButtonPath from './assets/index_menu/hogares 2.png';
import saludOralButtonPath from './assets/index_menu/salud oral.png';

import serviciosMedicosButtonPath from './assets/index_menu/servicios medicos.png';
import serviciosOdontologicosButtonPath from './assets/index_menu/servicios odontologicos.png';
import rehabilitacionNutricionalButtonPath from './assets/index_menu/rehabilitacion nutricional.png';

import refuerzoNinosButton from './assets/index_menu/refuerzo ninos.png';
import refuerzoJovenesButton from './assets/index_menu/refuerzo jovenes.png';
import cursoComputacionButton from './assets/index_menu/curso computacion.png';
import centroDescubrimientoButton from './assets/index_menu/centro.png';

import aflatounButton from './assets/index_menu/aflatoun.png';
import aJugarButton from './assets/index_menu/a jugar.png';
import empoderarteButton from './assets/index_menu/empoderarte.png';
import consejoJovenesButton from './assets/index_menu/jovenes.png';

import haciaEmpleoButton from './assets/index_menu/hacia el empleo.png';
import construyendoFuturoButton from './assets/index_menu/construyendo mi futuro.png';
import becasButton from './assets/index_menu/becas suena en grande.png';
import emprendiendoButton from './assets/index_menu/emprendiendo.png';

import avatarMenuNav from './assets/avatar.png';
import chanchoMenuNav from './assets/chancho.png';
import cofreMenuNav from './assets/cofre.png';
import tiendaMenuNav from './assets/tienda.png';
import chatMenuNav from './assets/msn.png';

import aflautonAct1_5 from './assets/aflauton-dude.png';
import nextAct1_5 from './assets/siguiente.png';
import conflicto1 from './assets/conflicto1.png';
import conflicto2 from './assets/conflicto2.png';
import conflicto3 from './assets/conflicto3.png';
import conflicto4 from './assets/conflicto4.png';
import conflicto5 from './assets/conflicto5.png';
import balls from './assets/balls.png';

class LoadState extends Phaser.State {
  preload() {
    const loadingBar = this.add.sprite(ancho / 2, alto / 2, 'loading');
    loadingBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(loadingBar);

    this.game.load.image('logo', childrenLogoPath);
    this.game.load.image('casas_bg', casasBgPath);
    this.game.load.image('bg1', GameBackground1Path);

    this.game.load.image('cepillo_icon', cepilloIconPath);
    this.game.load.image('doctor_icon', doctorIconPath);
    this.game.load.image('libro_icon', libroIconPath);
    this.game.load.image('manos_icon', manosIconPath);
    this.game.load.image('mujer_hombre_icon', mujerHombreIconPath);

    this.game.load.image('hogares1_button', hogares1ButtonPath);
    this.game.load.image('hogares2_button', hogares2ButtonPath);
    this.game.load.image('salud_oral_button', saludOralButtonPath);

    this.game.load.image('serv_medicos_button', serviciosMedicosButtonPath);
    this.game.load.image('serv_odont_button', serviciosOdontologicosButtonPath);
    this.game.load.image(
      'rehab_nutr_button',
      rehabilitacionNutricionalButtonPath
    );

    this.game.load.image('hogares1_button', hogares1ButtonPath);
    this.game.load.image('hogares2_button', hogares2ButtonPath);
    this.game.load.image('salud_oral_button', saludOralButtonPath);

    this.game.load.image('refuerzo_ninos_button', refuerzoNinosButton);
    this.game.load.image('refuerzo_jovenes_button', refuerzoJovenesButton);
    this.game.load.image('curso_comp_button', cursoComputacionButton);
    this.game.load.image('centro_descu_button', centroDescubrimientoButton);

    this.game.load.image('aflatoun_button', aflatounButton);
    this.game.load.image('a_jugar_button', aJugarButton);
    this.game.load.image('consejo_jovenes_button', consejoJovenesButton);
    this.game.load.image('empoderarte_button', empoderarteButton);

    this.game.load.image('hacia_empleo_button', haciaEmpleoButton);
    this.game.load.image('construyendo_button', construyendoFuturoButton);
    this.game.load.image('becas_button', becasButton);
    this.game.load.image('emprendiendo_button', emprendiendoButton);

    this.game.load.image('avatar', avatarMenuNav);
    this.game.load.image('chancho', chanchoMenuNav);
    this.game.load.image('cofre', cofreMenuNav);
    this.game.load.image('tienda', tiendaMenuNav);
    this.game.load.image('chat', chatMenuNav);

    //Actividad 1.5 de Wilmer
    this.game.load.image('aflautonAct1_5', aflautonAct1_5);
    this.game.load.image('nextAct1_5', nextAct1_5);
    this.game.load.image('conflicto1', conflicto1);
    this.game.load.image('conflicto2', conflicto1);
    this.game.load.image('conflicto3', conflicto1);
    this.game.load.image('conflicto4', conflicto1);
    this.game.load.image('conflicto5', conflicto1);
    this.game.load.spritesheet('balls', balls, 17, 17);
    //Actividad 1.5 de Wilmer
  }

  create() {
    this.game.stage.backgroundColor = '#E6E6E6';
    this.game.state.add('GameTitle', new MenuState());
    this.game.state.start('GameTitle');
  }
}

export default LoadState;
