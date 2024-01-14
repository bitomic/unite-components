import { Component, Prop, getAssetPath, h } from '@stencil/core'

@Component( {
  assetsDirs: [ 'assets' ],
  tag: 'pu-tachie-box',
  styleUrl: 'pu-tachie-box.css'
} )
export class UniteComponent {
  @Prop() disabled = false
  @Prop() trainer = 'Hydrogen'
  @Prop() pokemon = 'Absol'
  @Prop() color: 'attacker' | 'all-rounder' | 'defender' | 'speedster' | 'supporter' = 'speedster'
  @Prop() team: 'orange' | 'purple' = 'orange'

  getRosterImage(value: string): string {
    let name = value.replace( '.', '' ).replace( ' ', '-' ).toLowerCase()
    if (name === 'ninetales') {
      name = 'alolan-ninetales'
    }
    return `https://unite.pokemon.com/images/pokemon/${ name }/roster/roster-${ name }.png`
  }

  render() {
    const checkers = getAssetPath('./assets/Patrón_Cuadrados.svg')
    const dots = getAssetPath('./assets/Patrón_Puntos.svg')
    const src = this.getRosterImage(this.pokemon)

    const disabledClass = this.disabled ? 'tb--disabled' : ''
    return <div class={`tachie-box tb--${ this.color } tb--${ this.team } ${ disabledClass }`}>
      <div class="tb__image" style={ {
        '--checkers': `url("${ checkers }")`,
        '--dots': `url("${ dots }")`
      } }>
        <img class="tb__tachie" src={ src } />
      </div>
      <div class="tb__data">
        <div class="tb__pokemon"> { this.pokemon } </div>
        <div class="tb__trainer"> { this.trainer } </div>
      </div>
    </div>
  }
}
