const { registerBlockType } = window.Laraberg
import InfoBox from './block'

export default () => {
  registerBlockType('test/info-box', InfoBox)
}
