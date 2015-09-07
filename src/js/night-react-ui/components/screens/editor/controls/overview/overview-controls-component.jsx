/** @jsx ReactBEM.createElement **/
/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import { ReactBEM, BaseChildComponent } from '../../../../../globals'

export default class OverviewControlsComponent extends BaseChildComponent {
  constructor () {
    super()
  }

  /**
   * Renders this component
   * @return {ReactBEM.Element}
   */
  renderWithBEM () {
    const listItems = this.context.ui.getSelectedOperations()
      .map((operation) => {
        console.log(operation)
        return ''
      })

    return (<div bem='$b:controls e:row'>
      <div bem='e:cell m:list'>
        <ul bem='e:list'>
          {listItems}
        </ul>
      </div>
    </div>)
  }
}