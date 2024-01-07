import { Component, Prop, getAssetPath, h } from '@stencil/core'

@Component({
  assetsDirs: [ 'assets' ],
  styleUrl: 'pu-button.css',
  tag: 'pu-button'
})
export class UniteComponent {
  @Prop() color: 'default' | 'purple' | 'red' = 'default'
  @Prop() disabled = false
  @Prop() href: string | null = null
  @Prop() icon = true
  @Prop() text: string

  render() {
    const disabledClass = this.disabled ? 'btn--disabled' : ''
    const iconClass = this.icon ? 'btn--icon' : ''
    const iconSrc = getAssetPath( './assets/pokeball.png' )
    const properties = {
      class: `btn btn--${ this.color } ${ disabledClass } ${ iconClass }`,
      href: this.href,
      role: 'button',
      tabindex: 0,
      style: {
        '--icon': `url("${ iconSrc }")`
      }
    }

    if ( this.href ) {
      return <a { ...properties }> <slot /> </a>
    } else {
      return <button { ...properties }> <slot /> </button>
    }
  }
}

