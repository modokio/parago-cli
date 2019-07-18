//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//

import * as shell from 'shelljs'
import Command    from '../base'

export default class Train extends Command {
  static description = "Train model using defined command in config"

  static examples = [
    `$ pgo train`
  ]

  async run() {
    let cmd = this.parago.commands.train || ''

    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        shell.config.silent = true
        
        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)
      
      shell.config.silent = false
    }

  }
}
