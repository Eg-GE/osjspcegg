/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2017, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */

const Window = OSjs.require('core/window');
const Application = OSjs.require('core/application');

class ApplicationAboutWindow extends Window {
  constructor(app, metadata) {
    super('ApplicationAboutWindow', {
      icon: metadata.icon,
      title: metadata.name,
      gravity: 'center',
      allow_resize: false,
      allow_maximize: false,
      width: 320,
      height: 320,
      min_width: 320,
      min_height: 320
    }, app);
  }

  init(wm, app) {
    const root = super.init(...arguments);

    this._render('AboutWindow', require('osjs-scheme-loader!scheme.html'));

    return root;
  }
}

class ApplicationAbout extends Application {
  constructor(args, metadata) {
    super('ApplicationAbout', args, metadata);
  }

  init(settings, metadata) {
    super.init(...arguments);
    this._addWindow(new ApplicationAboutWindow(this, metadata));
  }
}

OSjs.Applications.ApplicationAbout = ApplicationAbout;

