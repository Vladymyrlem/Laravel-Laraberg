const { registerBlockType } = window.Laraberg
import Slider from './block'

export default () => {
  registerBlockType('test/slider', Slider)
}
