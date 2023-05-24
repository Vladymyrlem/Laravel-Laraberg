const { registerBlockType } = window.Laraberg
import Sections from './block'

export default () => {
  registerBlockType('test/sections', Sections)
}
