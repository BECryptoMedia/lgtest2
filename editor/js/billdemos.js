
//dictionary ClipboardEventInit : EventInit {
//	DataTransfer? clipboardData = null;
//  };
  
var temp_vec2 = new Float32Array(2);
var globalBillCTX = null;
//var globalBillNodeWhichHalf = 'none';

async function copyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	console.log('within the copyTextToClipboard function, copying text=<'+text+'>');
	// Place in the top-left corner of screen regardless of scroll position.
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	
 	// Ensure it has a small width and height. Setting to 1px / 1em
	// doesn't work as this gives a negative w/h on some browsers.
	textArea.style.width = '2em';
	textArea.style.height = '2em';
 	// We don't need padding, reducing the size if it does flash render.
	textArea.style.padding = 0;
    // Clean up any borders.
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	// Avoid flash of the white box if rendered for any reason.
	textArea.style.background = 'transparent';
  
	textArea.value = text;
  
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
  
	try {
	  var successful = document.execCommand('copy');
	  var msg = successful ? 'successful' : 'unsuccessful';
	  console.log('00Copying text command was ' + msg);
	  console.log('the SUCCESSFUL text copied was ' + text);
	} catch (err) {
	  console.log('Oops, unable to copy');
	}
  
	document.body.removeChild(textArea);
	
	const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
	const permissionStatus = await navigator.permissions.query(queryOpts);
// Will be 'granted', 'denied' or 'prompt':
	console.log('permission status', permissionStatus.state);

// Listen for changes to the permission state
permissionStatus.onchange = () => {
  console.log('permission status', permissionStatus.state);
};
  };


  function copyTextFromButtonToClipboard(text) {
	
	try {
	  var successful = document.execCommand('copy');
	  var msg = successful ? 'successful' : 'unsuccessful';
	  console.log('00Copying text command was ' + msg);
	  console.log('the SUCCESSFUL text copied was ' + text);
	} catch (err) {
	  console.log('Oops, unable to copy');
	}
    };

 function copyTextFromClipboard() {
	console.log('within the copyTextFromClipboard function');
//	var textAreaPaste = document.createElement("textarea");
//    var oldQuesText = document.createElement("textarea");
    //newQuesText.id = "questionText";
    var textAreaPaste = document.createElement("textarea");
    document.body.appendChild(textAreaPaste);
    //document.body.replaceChild(textAreaPaste, oldQuesText);
    //quesTextArea.focus();
	textAreaPaste.focus();
//	textAreaPaste.value = 'this text is the new text to be copied bill0349';
	console.log('this is placeholder to reset focus');
//	textAreaPaste.autofocus = true;
	
	textAreaPaste.focus();
	textAreaPaste.select();

	


//	var textAreaPaste = document.body.createElement("textarea");
//	document.appendChild(textAreaPaste);
//	textAreaPaste.focus();
//	console.log(document.activeElement);
	//textAreaPaste.select();

	textAreaPaste.focus();
	textAreaPaste.select();

	try {
		const textRead = navigator.clipboard.readText();
		console.log('textRead', textRead);
		//document.querySelector('textarea').value += text;
		console.log('Text pasted success.');
	  } catch (error) {
		console.log('Failed to read navigator.clipboard.readText');
		//console.log('error is=', error);
	  }

	  console.log('textAreaPaste var=', textAreaPaste);
	//try {
	//	var successful = document.execCommand('paste');
	//	console.log('successful=', successful);
	//	var msg = successful ? 'successful' : 'unsuccessful';
	//	console.log('00Copying text command was ' + msg);
	  //} catch (err) {
		//console.log('Oops, unable to copy');
	 // }
	// Place in the top-left corner of screen regardless of scroll position.
	textAreaPaste.style.position = 'fixed';
	textAreaPaste.style.top = 0;
	textAreaPaste.style.left = 0;
 	// Ensure it has a small width and height. Setting to 1px / 1em
	// doesn't work as this gives a negative w/h on some browsers.
	textAreaPaste.style.width = '100em';
	textAreaPaste.style.height = '2em';
 	// We don't need padding, reducing the size if it does flash render.
	textAreaPaste.style.padding = 0;
    // Clean up any borders.
	textAreaPaste.style.border = 'none';
	textAreaPaste.style.outline = 'none';
	textAreaPaste.style.boxShadow = 'none';
	// Avoid flash of the white box if rendered for any reason.
//	textAreaPaste.style.background = 'transparent';
//textAreaPaste.select();
//textAreaPaste.value = 'this text';
console.log('textAreaPaste var=', textAreaPaste);

  

  
//	document.body.removeChild(textAreaPaste);
  }
function pasteTextFromClipboard() {
	var clipText = '00this is from clipText';
	var mytextFromClipboard = 'nothing';
	if (navigator.clipboard) {
		console.log('Clipboard API available');
	  } else {
		console.log('Clipboard API not available after check');
	  };
	
	  navigator.clipboard.readText()
	  .then(text => {
		console.log('text=',text);
	  })
	  .catch(err => {
		console.error('Failed to read clipboard contents: ', err);
	  });
	
//	console.log('myResult', myResult);
	console.log('mytextFromClipboard', mytextFromClipboard);
	console.log('clipText', clipText);
	  if (mytextFromClipboard) {
		return mytextFromClipboard;
		// use text accordingly
	  } else {
		return "I could not access text from the clipboard";
	  }
	
//	}
	//if (navigator.clipboard.writeText('aaa')) {
	//	console.log('Can copy text to clipboard');
	//  };
//	return copiedText;
  }

  // ************ 01 april
  function getTextFromClipboard() {
	var clipText = '00this is from getTextFromClipboard';
	console.log('function mytextFromClipboard');
	console.log('mytextFromClipboard', mytextFromClipboard);
	var mytextFromClipboard = 'nothing';

	if (navigator.clipboard) {
		console.log('Clipboard API available');
	  } else {
		console.log('Clipboard API not available after check');
	  };
	
	  navigator.clipboard.readText()
	  .then(text => {
		console.log('got this from the clipboard text=',text);
		BillNode1.button5.name = text;
		console.log('permission after prompt ',navigator.permissions.query({ name: 'clipboard-read' }));
	//	document.getElementById('gggg').value = text;
	  })
	  .catch(err => {
		console.error('Failed to read clipboard contents: ', err);
	  });
	
	  var textAreaPaste = document.createElement("textarea");
	//  document.body.appendChild(textAreaPaste);
	  textAreaPaste.style.position = 'fixed';
	  textAreaPaste.style.top = 0;
	  textAreaPaste.style.left = 0;
	   // Ensure it has a small width and height. Setting to 1px / 1em
	  // doesn't work as this gives a negative w/h on some browsers.
	  textAreaPaste.style.width = '100em';
	  textAreaPaste.style.height = '2em';
	   // We don't need padding, reducing the size if it does flash render.
	  textAreaPaste.style.padding = 0;
	  // Clean up any borders.
	  textAreaPaste.style.border = 'none';
	  textAreaPaste.style.outline = 'none';
	  textAreaPaste.style.boxShadow = 'none';

//	console.log('myResult', myResult);
	console.log('mytextFromClipboard', mytextFromClipboard);
	console.log('clipText', clipText);
	  if (mytextFromClipboard) {
		return mytextFromClipboard;
		// use text accordingly
	  } else {
		return "I could not access text from the clipboard";
	  }
	

//	}
	//if (navigator.clipboard.writeText('aaa')) {
	//	console.log('Can copy text to clipboard');
	//  };
//	return copiedText;
  }

function makeAnInputBox() {
	var textAreaPaste = document.createElement("textarea");
	document.body.appendChild(textAreaPaste);
	textAreaPaste.style.position = 'fixed';
	textAreaPaste.style.top = 0;
	textAreaPaste.style.left = 0;
	 // Ensure it has a small width and height. Setting to 1px / 1em
	// doesn't work as this gives a negative w/h on some browsers.
	textAreaPaste.style.width = '100em';
	textAreaPaste.style.height = '2em';
	 // We don't need padding, reducing the size if it does flash render.
	textAreaPaste.style.padding = 0;
	// Clean up any borders.
	textAreaPaste.style.border = 'none';
	textAreaPaste.style.outline = 'none';
	textAreaPaste.style.boxShadow = 'none';
	textAreaPaste.value = 'this text';

	textAreaPaste.focus();
	textAreaPaste.select();
};

async function getPermissions(){
	const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
	const permissionStatus = await navigator.permissions.query(queryOpts);
	// Will be 'granted', 'denied' or 'prompt':
	console.log('permission from getPermission function ', permissionStatus.state);
};

LGraphCanvas.prototype.drawBillNode = function(node, ctx) {
	var glow = false;
	this.current_node = node;


	var color = node.color || node.constructor.color || LiteGraph.NODE_DEFAULT_COLOR;
	var bgcolor = node.bgcolor || node.constructor.bgcolor || LiteGraph.NODE_DEFAULT_BGCOLOR;

//	console.log('00000 ----- ----- in drawBillNode function='+ node.title);
//	console.log('permisison ',navigator.permissions.query({ name: 'clipboard-read' }));


getPermissions();
// Will be 'granted', 'denied' or 'prompt':
//console.log(permissionStatus.state);

	//console.log('node is ', node);
	//console.log('ctx =',ctx);
	//console.log('mycryptoaddress=',this.myCryptoAddress);

	globalBillCTX = ctx;
	//console.log('00000 ----- ----- pos of this node ' + node.title + ' is ' + node.pos);
	//shadow and glow
	if (node.mouseOver) {
		glow = true;
	}

	var low_quality = this.ds.scale < 0.6; //zoomed out

	//only render if it forces it to do it
	if (this.live_mode) {
		if (!node.flags.collapsed) {
			ctx.shadowColor = "transparent";
			if (node.onDrawForeground) {
				node.onDrawForeground(ctx, this, this.canvas);
			}
		}
		return;
	}

	//this.myCryptoAddress = 'no address';

	var editor_alpha = this.editor_alpha;
	ctx.globalAlpha = editor_alpha;

	if (this.render_shadows && !low_quality) {
		ctx.shadowColor = LiteGraph.DEFAULT_SHADOW_COLOR;
		ctx.shadowOffsetX = 2 * this.ds.scale;
		ctx.shadowOffsetY = 2 * this.ds.scale;
		ctx.shadowBlur = 3 * this.ds.scale;
	} else {
		ctx.shadowColor = "transparent";
	}

	//custom draw collapsed method (draw after shadows because they are affected)
	if (
		node.flags.collapsed &&
		node.onDrawCollapsed &&
		node.onDrawCollapsed(ctx, this) == true
	) {
		return;
	}

	//clip if required (mask)
	var shape = node._shape || LiteGraph.BOX_SHAPE;
	var size = temp_vec2;
	temp_vec2.set(node.size);
	//console.log('drawBillNode = node.size =' + node.size);  //does not change if you scroll in or out
	var horizontal = node.horizontal; // || node.flags.horizontal;

	if (node.flags.collapsed) {
		ctx.font = this.inner_text_font;
		var title = node.getTitle ? node.getTitle() : node.title;
		if (title != null) {
			node._collapsed_width = Math.min(
				node.size[0],
				ctx.measureText(title).width +
					LiteGraph.NODE_TITLE_HEIGHT * 2
			); //LiteGraph.NODE_COLLAPSED_WIDTH;
			size[0] = node._collapsed_width;
			size[1] = 0;
		}
	}

	if (node.clip_area) {
		//Start clipping
		ctx.save();
		ctx.beginPath();
		if (shape == LiteGraph.BOX_SHAPE) {
			ctx.rect(0, 0, size[0], size[1]);
		} else if (shape == LiteGraph.ROUND_SHAPE) {
			ctx.roundRect(0, 0, size[0], size[1], [10]);
		} else if (shape == LiteGraph.CIRCLE_SHAPE) {
			ctx.arc(
				size[0] * 0.5,
				size[1] * 0.5,
				size[0] * 0.5,
				0,
				Math.PI * 2
			);
		}
		ctx.clip();
	}

	//draw shape
	if (node.has_errors) {
		bgcolor = "red";
	}
	this.drawNodeShape(
		node,
		ctx,
		size,
		color,
		bgcolor,
		node.is_selected,
		node.mouseOver
	);
	ctx.shadowColor = "transparent";

	//draw foreground
	if (node.onDrawForeground) {
		node.onDrawForeground(ctx, this, this.canvas);
	}

	//connection slots
	ctx.textAlign = horizontal ? "center" : "left";
	ctx.font = this.inner_text_font;

	var render_text = !low_quality;

	var out_slot = this.connecting_output;
	var in_slot = this.connecting_input;
	ctx.lineWidth = 1;

	var max_y = 0;
	var slot_pos = new Float32Array(2); //to reuse

	//render inputs and outputs
	if (!node.flags.collapsed) {
		//input connection slots
		if (node.inputs) {
			for (var i = 0; i < node.inputs.length; i++) {
				var slot = node.inputs[i];
				
				var slot_type = slot.type;
				var slot_shape = slot.shape;
				
				ctx.globalAlpha = editor_alpha;
				//change opacity of incompatible slots when dragging a connection
				if ( this.connecting_output && !LiteGraph.isValidConnection( slot.type , out_slot.type) ) {
					ctx.globalAlpha = 0.4 * editor_alpha;
				}

				ctx.fillStyle =
					slot.link != null
						? slot.color_on ||
						  this.default_connection_color_byType[slot_type] ||
						  this.default_connection_color.input_on
						: slot.color_off ||
						  this.default_connection_color_byTypeOff[slot_type] ||
						  this.default_connection_color_byType[slot_type] ||
						  this.default_connection_color.input_off;

				var pos = node.getConnectionPos(true, i, slot_pos);
				pos[0] -= node.pos[0];
				pos[1] -= node.pos[1];
				if (max_y < pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5) {
					max_y = pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5;
				}

				ctx.beginPath();

				if (slot_type == "array"){
					slot_shape = LiteGraph.GRID_SHAPE; // place in addInput? addOutput instead?
				}
				
				var doStroke = true;
				
				if (
					slot.type === LiteGraph.EVENT ||
					slot.shape === LiteGraph.BOX_SHAPE
				) {
					if (horizontal) {
						ctx.rect(
							pos[0] - 5 + 0.5,
							pos[1] - 8 + 0.5,
							10,
							14
						);
					} else {
						ctx.rect(
							pos[0] - 6 + 0.5,
							pos[1] - 5 + 0.5,
							14,
							10
						);
					}
				} else if (slot_shape === LiteGraph.ARROW_SHAPE) {
					ctx.moveTo(pos[0] + 8, pos[1] + 0.5);
					ctx.lineTo(pos[0] - 4, pos[1] + 6 + 0.5);
					ctx.lineTo(pos[0] - 4, pos[1] - 6 + 0.5);
					ctx.closePath();
				} else if (slot_shape === LiteGraph.GRID_SHAPE) {
					ctx.rect(pos[0] - 4, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] - 4, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] - 4, pos[1] + 2, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] + 2, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] + 2, 2, 2);
					doStroke = false;
				} else {
					if(low_quality)
						ctx.rect(pos[0] - 4, pos[1] - 4, 8, 8 ); //faster
					else
						ctx.arc(pos[0], pos[1], 4, 0, Math.PI * 2);
				}
				ctx.fill();

				//render name
				if (render_text) {
					var text = slot.label != null ? slot.label : slot.name;
					if (text) {
						ctx.fillStyle = LiteGraph.NODE_TEXT_COLOR;
						if (horizontal || slot.dir == LiteGraph.UP) {
							ctx.fillText(text, pos[0], pos[1] - 10);
						} else {
							ctx.fillText(text, pos[0] + 10, pos[1] + 5);
						}
					}
				}
			}
		}

		//output connection slots

		ctx.textAlign = horizontal ? "center" : "right";
		ctx.strokeStyle = "black";
		if (node.outputs) {
			for (var i = 0; i < node.outputs.length; i++) {
				var slot = node.outputs[i];
				
				var slot_type = slot.type;
				var slot_shape = slot.shape;
				
				//change opacity of incompatible slots when dragging a connection
				if (this.connecting_input && !LiteGraph.isValidConnection( slot_type , in_slot.type) ) {
					ctx.globalAlpha = 0.4 * editor_alpha;
				}
				
				var pos = node.getConnectionPos(false, i, slot_pos);
				pos[0] -= node.pos[0];
				pos[1] -= node.pos[1];
				if (max_y < pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5) {
					max_y = pos[1] + LiteGraph.NODE_SLOT_HEIGHT * 0.5;
				}

				ctx.fillStyle =
					slot.links && slot.links.length
						? slot.color_on ||
						  this.default_connection_color_byType[slot_type] ||
						  this.default_connection_color.output_on
						: slot.color_off ||
						  this.default_connection_color_byTypeOff[slot_type] ||
						  this.default_connection_color_byType[slot_type] ||
						  this.default_connection_color.output_off;
				ctx.beginPath();
				//ctx.rect( node.size[0] - 14,i*14,10,10);

				if (slot_type == "array"){
					slot_shape = LiteGraph.GRID_SHAPE;
				}
				
				var doStroke = true;
				
				if (
					slot_type === LiteGraph.EVENT ||
					slot_shape === LiteGraph.BOX_SHAPE
				) {
					if (horizontal) {
						ctx.rect(
							pos[0] - 5 + 0.5,
							pos[1] - 8 + 0.5,
							10,
							14
						);
					} else {
						ctx.rect(
							pos[0] - 6 + 0.5,
							pos[1] - 5 + 0.5,
							14,
							10
						);
					}
				} else if (slot_shape === LiteGraph.ARROW_SHAPE) {
					ctx.moveTo(pos[0] + 8, pos[1] + 0.5);
					ctx.lineTo(pos[0] - 4, pos[1] + 6 + 0.5);
					ctx.lineTo(pos[0] - 4, pos[1] - 6 + 0.5);
					ctx.closePath();
				}  else if (slot_shape === LiteGraph.GRID_SHAPE) {
					ctx.rect(pos[0] - 4, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] - 4, 2, 2);
					ctx.rect(pos[0] - 4, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] - 1, 2, 2);
					ctx.rect(pos[0] - 4, pos[1] + 2, 2, 2);
					ctx.rect(pos[0] - 1, pos[1] + 2, 2, 2);
					ctx.rect(pos[0] + 2, pos[1] + 2, 2, 2);
					doStroke = false;
				} else {
					if(low_quality)
						ctx.rect(pos[0] - 4, pos[1] - 4, 8, 8 );
					else
						ctx.arc(pos[0], pos[1], 4, 0, Math.PI * 2);
				}

				//trigger
				//if(slot.node_id != null && slot.slot == -1)
				//	ctx.fillStyle = "#F85";

				//if(slot.links != null && slot.links.length)
				ctx.fill();
				if(!low_quality && doStroke)
					ctx.stroke();

				//render output name
				if (render_text) {
					var text = slot.label != null ? slot.label : slot.name;
					if (text) {
						ctx.fillStyle = LiteGraph.NODE_TEXT_COLOR;
						if (horizontal || slot.dir == LiteGraph.DOWN) {
							ctx.fillText(text, pos[0], pos[1] - 8);
						} else {
							ctx.fillText(text, pos[0] - 10, pos[1] + 5);
						}
					}
				}
			}
		}

		ctx.textAlign = "left";
		ctx.globalAlpha = 1;

		if (node.widgets) {
		//	console.log('drawing each widget loop');
			var widgets_y = max_y;
			if (horizontal || node.widgets_up) {
				widgets_y = 2;
			}
			if( node.widgets_start_y != null )
				widgets_y = node.widgets_start_y;
			this.drawBillNodeWidgets(
				node,
				widgets_y,
				ctx,
				this.node_widget && this.node_widget[0] == node
					? this.node_widget[1]
					: null
			);
		}
	} else if (this.render_collapsed_slots) {
		//if collapsed
		var input_slot = null;
		var output_slot = null;

		//get first connected slot to render
		if (node.inputs) {
			for (var i = 0; i < node.inputs.length; i++) {
				var slot = node.inputs[i];
				if (slot.link == null) {
					continue;
				}
				input_slot = slot;
				break;
			}
		}
		if (node.outputs) {
			for (var i = 0; i < node.outputs.length; i++) {
				var slot = node.outputs[i];
				if (!slot.links || !slot.links.length) {
					continue;
				}
				output_slot = slot;
			}
		}

		if (input_slot) {
			var x = 0;
			var y = LiteGraph.NODE_TITLE_HEIGHT * -0.5; //center
			if (horizontal) {
				x = node._collapsed_width * 0.5;
				y = -LiteGraph.NODE_TITLE_HEIGHT;
			}
			ctx.fillStyle = "#686";
			ctx.beginPath();
			if (
				slot.type === LiteGraph.EVENT ||
				slot.shape === LiteGraph.BOX_SHAPE
			) {
				ctx.rect(x - 7 + 0.5, y - 4, 14, 8);
			} else if (slot.shape === LiteGraph.ARROW_SHAPE) {
				ctx.moveTo(x + 8, y);
				ctx.lineTo(x + -4, y - 4);
				ctx.lineTo(x + -4, y + 4);
				ctx.closePath();
			} else {
				ctx.arc(x, y, 4, 0, Math.PI * 2);
			}
			ctx.fill();
		}

		if (output_slot) {
			var x = node._collapsed_width;
			var y = LiteGraph.NODE_TITLE_HEIGHT * -0.5; //center
			if (horizontal) {
				x = node._collapsed_width * 0.5;
				y = 0;
			}
			ctx.fillStyle = "#686";
			ctx.strokeStyle = "black";
			ctx.beginPath();
			if (
				slot.type === LiteGraph.EVENT ||
				slot.shape === LiteGraph.BOX_SHAPE
			) {
				ctx.rect(x - 7 + 0.5, y - 4, 14, 8);
			} else if (slot.shape === LiteGraph.ARROW_SHAPE) {
				ctx.moveTo(x + 6, y);
				ctx.lineTo(x - 6, y - 4);
				ctx.lineTo(x - 6, y + 4);
				ctx.closePath();
			} else {
				ctx.arc(x, y, 4, 0, Math.PI * 2);
			}
			ctx.fill();
			//ctx.stroke();
		}
	}

	if (node.clip_area) {
		ctx.restore();
	}
	//console.log('end, created node is ' + node.title + ' at ' + pos[0] +','+pos[1]);
	//console.log('billPanAmount=',this.billPanAmount);
//	console.log('pos0 is '+pos[0]);
//	console.log('pos1 is '+pos[1]);
	ctx.globalAlpha = 1.0;
};

LGraphCanvas.prototype.drawBillNodeWidgets = function(
	node,
	posY,
	ctx,
	active_widget
) {
	if (!node.widgets || !node.widgets.length) {
		return 0;
	}
	//console.log('----- 11111 ----- in drawBillNodeWidgets function');
	var width = node.size[0];
	var widgets = node.widgets;
	posY += 2;
	var H = LiteGraph.NODE_WIDGET_HEIGHT;
	var CAButtonH = 40;
	var show_text = this.ds.scale > 0.5;
//	var show_text = this.ds.scale > 0.2;
	ctx.save();
	ctx.globalAlpha = this.editor_alpha;
	var outline_color = LiteGraph.WIDGET_OUTLINE_COLOR;
	var background_color = LiteGraph.WIDGET_BGCOLOR;
	var text_color = LiteGraph.WIDGET_TEXT_COLOR;
	var secondary_text_color = LiteGraph.WIDGET_SECONDARY_TEXT_COLOR;
	var margin = 15;

	for (var i = 0; i < widgets.length; ++i) {
		var w = widgets[i];
		var y = posY;
		if (w.y) {
			y = w.y;
		}
		w.last_y = y;
		ctx.strokeStyle = outline_color;
		ctx.fillStyle = "#222";
		ctx.textAlign = "left";
		//ctx.lineWidth = 2;
		if(w.disabled)
			ctx.globalAlpha *= 0.5;
		var widget_width = w.width || width;
		var billWidgetWidthFinal = widget_width - (margin*2);

	//	console.log('in drawBillNodeWidgets, widget.width = ' + widget_width);
		switch (w.type) {
			case "cabutton":
		//		console.log('switch case cabutton in drawBillNodeWidgets');
				if (w.clicked) {
					ctx.fillStyle = "#AAA";
					w.clicked = false;
					this.dirty_canvas = true;

				}
				ctx.fillRect(margin, y, widget_width - margin * 2, H);
			//	console.log('drawing cabutton box now, x='+node.billWidgetPosX+' y='+node.billWidgetPosY, ctx);
				node.billWidgetPosX = margin;
				node.billWidgetPosY = y;
				node.billNodeWidth = width;
				node.billWidgetWidth = widget_width - margin * 2;
//				console.log('node.billWidgetPosX = ' + node.billWidgetPosX);
//				console.log('node.billWidgetPosY = ' + node.billWidgetPosY);

				if(show_text && !w.disabled)
					ctx.strokeRect( margin, y, widget_width - margin * 2, H );
			//		console.log('creating button box with margin=' + margin + ', y=' + y + ', width=' + (widget_width - margin * 2) + ', H=' + H);
				if (show_text) {
					ctx.textAlign = "center";
					ctx.fillStyle = text_color;
					ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
				}
				break;
			case "button":
			//	console.log('drawing button in drawBillNodeWidgets');
				if (w.clicked) {
					console.log('switch case Button in drawBillNodeWidgets');
					ctx.fillStyle = "#AAA";
					w.clicked = false;
					this.dirty_canvas = true;
				}
				ctx.fillRect(margin, y, widget_width - margin * 2, H);
				if(show_text && !w.disabled)
					ctx.strokeRect( margin, y, widget_width - margin * 2, H );
				if (show_text) {
					ctx.textAlign = "center";
					ctx.fillStyle = text_color;
					ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
				}
				break;
			case "copypastebutton":
			//	console.log('in drawBillNodewidgets case copypastebutton');
				ctx.fillRect(margin, y, billWidgetWidthFinal/2, H);
				ctx.strokeRect( margin, y, billWidgetWidthFinal/2, H );
				ctx.fillRect( billWidgetWidthFinal/2+margin, y, (billWidgetWidthFinal/2), H );
				ctx.strokeRect( billWidgetWidthFinal/2+margin, y, (billWidgetWidthFinal/2), H );
				ctx.fillStyle = "#AAA";
				ctx.textAlign = "center";
				ctx.fillStyle = text_color;
//				ctx.fillText('Copy                 Paste', widget_width * 0.5, y + H * 0.7);
				ctx.fillText('Copy', widget_width * 0.25, y + H * 0.7);
				ctx.fillText('Paste', widget_width * 0.75, y + H * 0.7);
				this.dirty_canvas = false;
				break;
			case "copybutton":
			//	console.log('drawing copybutton in drawBillNodeWidgets');
					if (w.clicked) {
						console.log('switch case copybutton in drawBillNodeWidgets');
						ctx.fillStyle = "#AAA";
						w.clicked = false;
						this.dirty_canvas = true;
					}
					ctx.fillRect(margin, y, widget_width - margin * 2, H);
					if(show_text && !w.disabled)
						ctx.strokeRect( margin, y, widget_width - margin * 2, H );
					if (show_text) {
						ctx.textAlign = "center";
						ctx.fillStyle = text_color;
						ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
					}
					break;
			case "pastebutton":
			//	console.log('drawing pastebutton in drawBillNodeWidgets');
						if (w.clicked) {
							console.log('switch case pastebutton in drawBillNodeWidgets');
							ctx.fillStyle = "#AAA";
							w.clicked = false;
							this.dirty_canvas = true;
						}
						ctx.fillRect(margin, y, widget_width - margin * 2, H);
						if(show_text && !w.disabled)
							ctx.strokeRect( margin, y, widget_width - margin * 2, H );
						if (show_text) {
							ctx.textAlign = "center";
							ctx.fillStyle = text_color;
							ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
						}
						break;

			case "databutton":
			//	console.log('drawing databutton in drawBillNodeWidgets');
			//makeAnInputBox();
							if (w.clicked) {
								console.log('switch case databutton in drawBillNodeWidgets');
								ctx.fillStyle = "#AAA";
								w.clicked = false;
								this.dirty_canvas = true;
							}
							ctx.fillRect(margin, y, widget_width - margin * 2, H);
							if(show_text && !w.disabled)
								ctx.strokeRect( margin, y, widget_width - margin * 2, H );
							if (show_text) {
								ctx.textAlign = "center";
								ctx.fillStyle = text_color;
								ctx.fillText(w.label || w.name, widget_width * 0.5, y + H * 0.7);
							}
							break;
		


						case "toggle":
				ctx.textAlign = "left";
				ctx.strokeStyle = outline_color;
				ctx.fillStyle = background_color;
				ctx.beginPath();
				if (show_text)
					ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);
				else
					ctx.rect(margin, y, widget_width - margin * 2, H );
				ctx.fill();
				if(show_text && !w.disabled)
					ctx.stroke();
				ctx.fillStyle = w.value ? "#89A" : "#333";
				ctx.beginPath();
				ctx.arc( widget_width - margin * 2, y + H * 0.5, H * 0.36, 0, Math.PI * 2 );
				ctx.fill();
				if (show_text) {
					ctx.fillStyle = secondary_text_color;
					const label = w.label || w.name;    
					if (label != null) {
						ctx.fillText(label, margin * 2, y + H * 0.7);
					}
					ctx.fillStyle = w.value ? text_color : secondary_text_color;
					ctx.textAlign = "right";
					ctx.fillText(
						w.value
							? w.options.on || "true"
							: w.options.off || "false",
						widget_width - 40,
						y + H * 0.7
					);
				}
				break;
			case "slider":
				ctx.fillStyle = background_color;
				ctx.fillRect(margin, y, widget_width - margin * 2, H);
				var range = w.options.max - w.options.min;
				var nvalue = (w.value - w.options.min) / range;
				if(nvalue < 0.0) nvalue = 0.0;
				if(nvalue > 1.0) nvalue = 1.0;
				ctx.fillStyle = w.options.hasOwnProperty("slider_color") ? w.options.slider_color : (active_widget == w ? "#89A" : "#678");
				ctx.fillRect(margin, y, nvalue * (widget_width - margin * 2), H);
				if(show_text && !w.disabled)
					ctx.strokeRect(margin, y, widget_width - margin * 2, H);
				if (w.marker) {
					var marker_nvalue = (w.marker - w.options.min) / range;
					if(marker_nvalue < 0.0) marker_nvalue = 0.0;
					if(marker_nvalue > 1.0) marker_nvalue = 1.0;
					ctx.fillStyle = w.options.hasOwnProperty("marker_color") ? w.options.marker_color : "#AA9";
					ctx.fillRect( margin + marker_nvalue * (widget_width - margin * 2), y, 2, H );
				}
				if (show_text) {
					ctx.textAlign = "center";
					ctx.fillStyle = text_color;
					ctx.fillText(
						w.label || w.name + "  " + Number(w.value).toFixed(
														w.options.precision != null
															? w.options.precision
															: 3
													),
						widget_width * 0.5,
						y + H * 0.7
					);
				}
				break;
			case "number":
			case "combo":
				ctx.textAlign = "left";
				ctx.strokeStyle = outline_color;
				ctx.fillStyle = background_color;
				ctx.beginPath();
				if(show_text)
					ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5] );
				else
					ctx.rect(margin, y, widget_width - margin * 2, H );
				ctx.fill();
				if (show_text) {
					if(!w.disabled)
						ctx.stroke();
					ctx.fillStyle = text_color;
					if(!w.disabled)
					{
						ctx.beginPath();
						ctx.moveTo(margin + 16, y + 5);
						ctx.lineTo(margin + 6, y + H * 0.5);
						ctx.lineTo(margin + 16, y + H - 5);
						ctx.fill();
						ctx.beginPath();
						ctx.moveTo(widget_width - margin - 16, y + 5);
						ctx.lineTo(widget_width - margin - 6, y + H * 0.5);
						ctx.lineTo(widget_width - margin - 16, y + H - 5);
						ctx.fill();
					}
					ctx.fillStyle = secondary_text_color;
					ctx.fillText(w.label || w.name, margin * 2 + 5, y + H * 0.7);
					ctx.fillStyle = text_color;
					ctx.textAlign = "right";
					if (w.type == "number") {
						ctx.fillText(
							Number(w.value).toFixed(
								w.options.precision !== undefined
									? w.options.precision
									: 3
							),
							widget_width - margin * 2 - 20,
							y + H * 0.7
						);
					} else {
						var v = w.value;
						if( w.options.values )
						{
							var values = w.options.values;
							if( values.constructor === Function )
								values = values();
							if(values && values.constructor !== Array)
								v = values[ w.value ];
						}
						ctx.fillText(
							v,
							widget_width - margin * 2 - 20,
							y + H * 0.7
						);
					}
				}
				break;
			case "string":
			case "text":  //bd change 325pm
			//console.log('case text');
				ctx.textAlign = "left";
				ctx.strokeStyle = outline_color;
				ctx.fillStyle = background_color;
				ctx.beginPath();

				if (show_text)
					ctx.roundRect(margin, y, widget_width - margin * 2, H, [H * 0.5]);
				else
					ctx.rect( margin, y, widget_width - margin * 2, H );
				ctx.fill();

				if (show_text) {
					if(!w.disabled)
						ctx.stroke();
					ctx.save();
					ctx.beginPath();
					ctx.rect(margin, y, widget_width - margin * 2, H);
					ctx.clip();

					//ctx.stroke();
					ctx.fillStyle = secondary_text_color;
					const label = w.label || w.name;	
					if (label != null) {
						ctx.fillText(label, margin * 2, y + H * 0.7);
					}
					ctx.fillStyle = text_color;
					ctx.textAlign = "right";
					ctx.fillText(String(w.value).substr(0,30), widget_width - margin * 2, y + H * 0.7); //30 chars max
					ctx.restore();
				}
				break;
			default:
				if (w.draw) {
					w.draw(ctx, node, widget_width, y, H);
				}
				break;
		}
		posY += (w.computeSize ? w.computeSize(widget_width)[1] : H) + 4;
		ctx.globalAlpha = this.editor_alpha;

	}
	ctx.restore();
	ctx.textAlign = "left";
};

LGraphCanvas.prototype.processBillNodeWidgets = function(
	node,
	pos,
	event,
	active_widget
) {
	//console.log('----- ----- 22222 running function processBillNodeWidgets, node=' + node + ', pos=' + pos + ', event=' + event + ', active-widget =' + active_widget);
	if (!node.widgets || !node.widgets.length || (!this.allow_interaction && !node.flags.allow_interaction)) {
		return null;
	}

//	if (dialog.parentNode) {
//		dialog.parentNode.removeChild(dialog);
//		console.log('closing the dialog box box from processBillNodeWidgets');
//	}

	var x = pos[0] - node.pos[0];
	var y = pos[1] - node.pos[1];
	var width = node.size[0];
	var deltaX = event.deltaX || event.deltax || 0;
	var that = this;
	var ref_window = this.getCanvasWindow();

	for (var i = 0; i < node.widgets.length; ++i) {
		var w = node.widgets[i];
		if(!w || w.disabled)
			continue;
		var widget_height = w.computeSize ? w.computeSize(width)[1] : LiteGraph.NODE_WIDGET_HEIGHT;
		var widget_width = w.width || width;
		//outside
		if ( w != active_widget && 
			(x < 6 || x > widget_width - 12 || y < w.last_y || y > w.last_y + widget_height || w.last_y === undefined) ) 
			continue;

		var old_value = w.value;
	//	console.log('widget type is ' + w.type);
	//	console.log('widget is ' + w.name  );
	//		console.log('widget size = ' + w.properties.size);
		//if ( w == active_widget || (x > 6 && x < widget_width - 12 && y > w.last_y && y < w.last_y + widget_height) ) {
		//inside widget
		switch (w.type) {
			case "cabutton":
			//	console.log('*******************switch case cabutton in processBillNodeWidgets');


				if (event.type == LiteGraph.pointerevents_method+"down") {
		//			console.log('mousedown event1 in w=',w);
		//			console.log('event type is ', event);
					this.billPrompt(w, node, "Value",w.value,function(v) {
							inner_value_change(this, v);
						}.bind(w),
						event,w.options ? w.options.multiline : false );
				} 

				if (event.type === LiteGraph.pointerevents_method+"down") {

			//		console.log('mousedown event2');
					if (w.callback) {
						setTimeout(function() {
							w.callback(w, that, node, pos, event);
						}, 20);
					}
					w.clicked = true;
					this.dirty_canvas = true;
				}
				break;


				case "databutton":
				//	console.log('in case databutton in processBillNodewidgets');
					if (event.type === LiteGraph.pointerevents_method+"down") {
						if (w.callback) {
							setTimeout(function() {
								w.callback(w, that, node, pos, event);
							}, 20);
						}
						w.clicked = true;
						this.dirty_canvas = true;
					}
					break;

				case "pastebutton":
					//	console.log('in case pastebutton in processBillNodewidgets');
					//	myVariableFromClipboard = pasteTextFromClipboard();
						console.log('myVariableFromClipboard=', myVariableFromClipboard);
						if (event.type === LiteGraph.pointerevents_method+"down") {
							if (w.callback) {
								setTimeout(function() {
									w.callback(w, that, node, pos, event);
								}, 20);
							}
							w.clicked = true;
							this.dirty_canvas = true;
						}
						break;

				case "copybutton":  // ***** this is not being used
					//		console.log('in case copybutton in processBillNodewidgets');
							copyTextToClipboard('processBillNodeWidgets 0x123...56789');
							if (event.type === LiteGraph.pointerevents_method+"down") {
								if (w.callback) {
									setTimeout(function() {
										w.callback(w, that, node, pos, event);
									}, 20);
								}
								w.clicked = true;
								this.dirty_canvas = true;
							}
							break;
				
				case "copypastebutton":
					var xPosOfMouseclick = pos[0];
					var midPointOfNode = node.pos[0] + node.size[0]/2;
					if (event.type === LiteGraph.pointerevents_method+"down") {
						if (xPosOfMouseclick < midPointOfNode) {
							console.log('clicked the LEFT COPY button');
//							copyTextToClipboard('processBillNodeWidgets 0x123...56789');
							copyTextToClipboard(BillNode1.button5.name);
						//	myElement = 
							document.getElementById('gggg').value = BillNode1.button5.name;
							console.log('returned from copyTextToClipboard function ok');
						} else {
							console.log('clicked the RIGHT PASTE button7');
							console.log('event ', event);
							event.preventDefault();
							getTextFromClipboard();
						};
								if (w.callback) {
										setTimeout(function() {
											w.callback(w, that, node, pos, event);
										//	getTextFromClipboard();
										}, 20);
									}
									w.clicked = true;
									this.dirty_canvas = true;
								}
						break;
				
			case "button":
				console.log('in case button in processBillNodewidgets');
				if (event.type === LiteGraph.pointerevents_method+"down") {
					if (w.callback) {
						setTimeout(function() {
							w.callback(w, that, node, pos, event);
						}, 20);
					}
					w.clicked = true;
					this.dirty_canvas = true;
				}
				break;
			case "slider":
				var old_value = w.value;
				var nvalue = clamp((x - 15) / (widget_width - 30), 0, 1);
				if(w.options.read_only) break;
				w.value = w.options.min + (w.options.max - w.options.min) * nvalue;
				if (old_value != w.value) {
					setTimeout(function() {
						inner_value_change(w, w.value);
					}, 20);
				}
				this.dirty_canvas = true;
				break;
			case "number":
			case "combo":
				var old_value = w.value;
				if (event.type == LiteGraph.pointerevents_method+"move" && w.type == "number") {
					if(deltaX)
						w.value += deltaX * 0.1 * (w.options.step || 1);
					if ( w.options.min != null && w.value < w.options.min ) {
						w.value = w.options.min;
					}
					if ( w.options.max != null && w.value > w.options.max ) {
						w.value = w.options.max;
					}
				} else if (event.type == LiteGraph.pointerevents_method+"down") {
					var values = w.options.values;
					if (values && values.constructor === Function) {
						values = w.options.values(w, node);
					}
					var values_list = null;
					
					if( w.type != "number")
						values_list = values.constructor === Array ? values : Object.keys(values);

					var delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
					if (w.type == "number") {
						w.value += delta * 0.1 * (w.options.step || 1);
						if ( w.options.min != null && w.value < w.options.min ) {
							w.value = w.options.min;
						}
						if ( w.options.max != null && w.value > w.options.max ) {
							w.value = w.options.max;
						}
					} else if (delta) { //clicked in arrow, used for combos 
						var index = -1;
						this.last_mouseclick = 0; //avoids dobl click event
						if(values.constructor === Object)
							index = values_list.indexOf( String( w.value ) ) + delta;
						else
							index = values_list.indexOf( w.value ) + delta;
						if (index >= values_list.length) {
							index = values_list.length - 1;
						}
						if (index < 0) {
							index = 0;
						}
						if( values.constructor === Array )
							w.value = values[index];
						else
							w.value = index;
					} else { //combo clicked 
						var text_values = values != values_list ? Object.values(values) : values;
						
						console.log('creating ContextMenu from processNodeWidgets');
						var menu = new LiteGraph.ContextMenu(text_values, {
								scale: Math.max(1, this.ds.scale),
								event: event,
								className: "dark",
								callback: inner_clicked.bind(w)
							},
							ref_window);
						function inner_clicked(v, option, event) {
							if(values != values_list)
								v = text_values.indexOf(v);
							this.value = v;
							inner_value_change(this, v);
							that.dirty_canvas = true;
							return false;
						}
					}
				} //end mousedown
				else if(event.type == LiteGraph.pointerevents_method+"up" && w.type == "number")
				{
					var delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
					if (event.click_time < 200 && delta == 0) {
						this.prompt("Value",w.value,function(v) {
								// check if v is a valid equation or a number
								  if (/^[0-9+\-*/()\s]+|\d+\.\d+$/.test(v)) {
									try {//solve the equation if possible
											v = eval(v);
									} catch (e) { }
								}	
								this.value = Number(v);
								inner_value_change(this, this.value);
							}.bind(w),
							event);
					}
				}

				if( old_value != w.value )
					setTimeout(
						function() {
							inner_value_change(this, this.value);
						}.bind(w),
						20
					);
				this.dirty_canvas = true;
				break;
			case "toggle":
				if (event.type == LiteGraph.pointerevents_method+"down") {
					w.value = !w.value;
					setTimeout(function() {
						inner_value_change(w, w.value);
					}, 20);
				}
				break;
			case "string":
			case "text":
				console.log('case text button pressed');
				if (event.type == LiteGraph.pointerevents_method+"down") {
					this.showSearchBox(event);
//					this.billPrompt(w, node, "Value",w.value,function(v) {
					this.prompt(w, node, "Value",w.value,function(v) {
							inner_value_change(this, v);
						}.bind(w),
						event,w.options ? w.options.multiline : false );
				}
				break;
			default:
				if (w.mouse) {
				//	console.log('default case');
					this.dirty_canvas = w.mouse(event, [x, y], node);
				}
				break;
			//	console.log('default case');
		} //end switch

		//value changed
		if( old_value != w.value )
		{
			if(node.onWidgetChanged)
				node.onWidgetChanged( w.name,w.value,old_value,w );
			node.graph._version++;
		}

		return w;
	}//end for

	function inner_value_change(widget, value) {
		if(widget.type == "number"){
			value = Number(value);
		}
		widget.value = value;
		if ( widget.options && widget.options.property && node.properties[widget.options.property] !== undefined ) {
			node.setProperty( widget.options.property, value );
		}
		if (widget.callback) {
			widget.callback(widget.value, that, node, pos, event);
		}
	}
	//console.log('default case');
	return null;
};

// testing of promptBox
    // refactor: there are different dialogs, some uses createDialog some dont
	LGraphCanvas.prototype.billPrompt = function(w, node, title, value, callback, event, multiline) {
        var that = this;
        var input_html = "";
        title = title || "";
		var cameFromKeypress = true;
		var billdialogExists = true;
		console.log('billPanAmount=',this.billPanAmount);
	//	dialogBoxCloseCounter = 0;
    //    console.log('drawing box from billPrompt function');
	//	console.log('node pos is ' + node.pos);
	//	console.log('w (widget) name is ' + w.name);
	//	console.log('event posx is ' + event.clientX);
	//	console.log('event posy is ' + event.clientY);
        var billdialog = document.createElement("div");
        billdialog.is_modified = false;
        billdialog.className = "billgraphdialog rounded";

 //       	dialog.innerHTML = "<span class='name'></span> <input autofocus type='text' class='value'/><button class='rounded'>OO</button>";
        	billdialog.innerHTML = "<span class='name'></span><input autofocus type='text' placeholder='CryptoAddress' class='value'/>";

//newest exp
billdialog.billclose2 = function() {
//	that.search_box = null;
	this.blur();
	canvas.focus();
//	root_document.body.style.overflow = "";

	setTimeout(function() {
		that.canvas.focus();
	}, 20); //important, if canvas loses focus keys wont be captured
	if (billdialog.parentNode) {
		billdialog.parentNode.removeChild(billdialog);
	}
};
//newest exp




			billdialog.billclose = function() {
				console.log('running dialog.billclose = function()');
            that.prompt_box = null;
            if (billdialog.parentNode) {
		//		console.log('cameFromKeypress='+cameFromKeypress);
		//		console.log('dialog.parentNode='+billdialog.parentNode);
		//		console.log('dialogExists='+billdialogExists);
            //    if (cameFromKeypress==true) {

				if (billdialogExists == false) return ;
					console.log('in check for dialogExists='+billdialogExists);

				//	console.log('parent='+this.parentElement.value);
				if (this.parentNode.billdialog == null) {
					console.log('!!!!!!!!billdialog.parentnode == null');
				} else {
					console.log('!!!!!!!!billdialog.parentnode != null');
				};


				const garbage = billdialog.parentNode.removeChild(billdialog);  
				
				billdialogExists = false;
				console.log('dialogExists='+billdialogExists);
					console.log('closing the dialog box box'); 
		//		}
		//		dialog.removeEventListener('blur', null);

	
            };
			console.log('exit of billclose');
        };

        var graphcanvas = LGraphCanvas.active_canvas;
        var canvas = graphcanvas.canvas;
        canvas.parentNode.appendChild(billdialog);
        
        if (this.ds.scale > 1) {
            billdialog.style.transform = "scale(" + this.ds.scale + ")";
        }

        var dialogCloseTimer = null;
        var prevent_timeout = false;
        LiteGraph.pointerListenerAdd(billdialog,"leave", function(e) {
			console.log('what is this leave function ?');
            if (prevent_timeout)
                return;
            if(LiteGraph.dialog_close_on_mouse_leave)
                if (!billdialog.is_modified && LiteGraph.dialog_close_on_mouse_leave)
                    dialogCloseTimer = setTimeout(billdialog.billclose, LiteGraph.dialog_close_on_mouse_leave_delay); //dialog.close();
        });
        LiteGraph.pointerListenerAdd(billdialog,"enter", function(e) {
		//	console.log('entered pointerlisteneradd');  //seems to fire when mouse goes over dialogbox
            if(LiteGraph.dialog_close_on_mouse_leave)
                if(dialogCloseTimer) clearTimeout(dialogCloseTimer);
        });
        var selInDia = billdialog.querySelectorAll("select");
	//	select(selInDia);
/*         if (selInDia){
            // if filtering, check focus changed to comboboxes and prevent closing
            selInDia.forEach(function(selIn) {
                selIn.addEventListener("click", function(e) {
					console.log('i got a click');
                    prevent_timeout++;
                });
                selIn.addEventListener("blur", function(e) {
					console.log('i got a blur');
                   prevent_timeout = 0;
                });
                selIn.addEventListener("change", function(e) {
                    prevent_timeout = -1;
					console.log('i got a change');
                });
            });
        } */

        if (that.prompt_box) {
			console.log('in if (that.prompt_box)');
        //    that.prompt_box.close();
        }
        that.prompt_box = billdialog;

        var first = null;
        var timeout = null;
        var selected = null;

//        var name_element = dialog.querySelector(".name");
//        name_element.innerText = title;
        var value_element = billdialog.querySelector(".value");
        value_element.value = value;

        var billinput = value_element;

		billinput.addEventListener('blur', function(e) {
			cameFromKeypress = false;
		//	console.log('i got a blur in addEventListener');
		//	console.log('supposed to dialog.close(); here');
			billdialog.billclose2();
			
		//	e.preventDefault();
        //    e.stopPropagation();
		});

		canvas.addEventListener('mousewheel', function(e) {
			//document.onmousewheel=false;
			billdialog.billclose2();
			console.log('mousewheel closed the dialog box from canvas handler');
		});

		billinput.addEventListener('mousewheel', function(e) {
			//document.onmousewheel=false;
			billdialog.billclose2();
			console.log('mousewheel closed the dialog box from billinput handler');
		});

        billinput.addEventListener("keydown", function(e) {
            billdialog.is_modified = true;
            if (e.keyCode == 27) {
                //ESC
				cameFromKeypress = true;
				console.log('===============esc key pressed, closing dialog box here NOT SAVING DATA');
                billdialog.billclose2(); 
			} else if (e.keyCode == 9) {
				//TAB
				cameFromKeypress = true;
				console.log('===============tab key pressed, closing dialog box here NOT SAVING DATA');
				billdialog.billclose2();
			} else if (e.keyCode == 13 && e.target.localName != "textarea") {
				cameFromKeypress = true;
				console.log('===============enter key pressed, closing dialog box here, committing and SAVING DATA');
                if (callback) {
                    callback(this.value);
                }
				console.log('final one getting fired');
                billdialog.billclose2();
            } else {
				console.log('entered the else area of keypress detect');
                return;
            }
            e.preventDefault();
            e.stopPropagation();
			
		//	console.log('end of else');
        });


//bd        var button = dialog.querySelector("button");
//bd        button.addEventListener("click", function(e) {
//bd            if (callback) {
//bd                callback(input.value);
//bd            }
//bd            that.setDirty(true);
//bd            dialog.close();
//bd        });

        var rect = canvas.getBoundingClientRect();  // where to draw the popup dialog box
		var offsetx = 0;
        var offsety = 0;
	//	console.log('offsetx='+offsetx);
	//	console.log('offsety='+offsety);
        if (rect) {
            offsetx -= rect.left;
            offsety -= rect.top;
        }
	//	console.log('offsetx='+offsetx);
	//	console.log('offsety='+offsety);

//		var billNodeTopleftX = node.pos[0];
//		var billNodeTopleftY = node.pos[1];
		var billNodeTopleftX = node.billWidgetPosX + node.pos[0] + this.billPanAmount[0];
		var billNodeTopleftY = node.billWidgetPosY + node.pos[1] + this.billPanAmount[1];
		var billNodeWidth = node.width;
		console.log('$$$$$ creating prompt box now - event is ' + event, event);
        if (event) {
// bill scroll experiment here
//orig            billdialog.style.left = (billNodeTopleftX) + "px";  //bd add node pos here
//orig            billdialog.style.top = billNodeTopleftY + "px";
    //        billdialog.style.left = event.screenX + "px";  //bd add node pos here
    //        billdialog.style.top = event.screenY + "px";
		//	console.log('e.canvasX='+event.canvasX+' does not appear to change on pan');
		//	console.log('e.canvasY='+event.canvasY+' does not appear to change on pan');
		//	console.log('e.pageX='+event.pageX+' does YES appear to change on pan');
		//	console.log('e.pageY='+event.pageY+' does YES appear to change on pan');
		//	console.log('e.screenX='+event.screenX+' does YES appear to change on pan');
		//	console.log('e.screenY='+event.screenY+' does YES appear to change on pan');
		//	console.log('e.view.X='+event.x+' does ??? appear to change on pan');
		//	console.log('e.view.Y='+event.y+' does ??? appear to change on pan');
			
			var billnodepos00x = node.pos[0]; 
			var billnodepos00y = node.pos[1]; 
			var billzoom = this.ds.scale;
			var billoffsetX = offsetx;
			var billoffsetY = offsety;

//			var billoffsetX = canvas.offset[0];
//			var billoffsetY = canvas.offset[1];

// Adjust node position for zoom and pan
			var adjustedX = (node.billWidgetPosX + node.pos[0]) * billzoom + billoffsetX;
			var adjustedY = (node.billWidgetPosY + node.pos[1]) * billzoom + billoffsetY;

	//		console.log('billnodepos00x',billnodepos00x);
	//		console.log('billnodepos00y',billnodepos00y);
	//		console.log('billoffsetX',billoffsetX);
	//		console.log('billoffsetY',billoffsetY);
	//		console.log('graphcanvas.scale', this.ds.scale);
	//		console.log('node is', node);
	//		console.log('parent node is ', node.parentNode);
	//		console.log('this.graph', this.canvas);
	//		console.log("Adjusted Node Position:", { x: adjustedX, y: adjustedY });

// bill scroll experiment here			
            billdialog.style.left = billNodeTopleftX + "px";  //bd add node pos here
            billdialog.style.top = billNodeTopleftY + "px";
			billdialog.style.width = (node.billWidgetWidth) + "px"; // this is the box that the inpouttext filed goes into
	//		console.log('widget.width = ' + node.billWidgetWidth);
		//	billdialog.style.width = (node.width - 20) + "px"; // this is the box that the inpouttext filed goes into
			billdialog.style.height = LiteGraph.NODE_WIDGET_HEIGHT;
//	console.log('dialog is ' + dialog);
	//console.log('event @@@@@billPrompt function: billNodeTopLeftX=' + billNodeTopleftX);
	//console.log('event @@@@@billPrompt function: billNodeTopLeftY=' + billNodeTopleftY);
	//console.log('event @@@@@node.pos[0]=' + node.pos[0]);
	//console.log('event @@@@@node.pos[1]=' + node.pos[1]);
        } else {
     //       billdialog.style.left = canvas.width * 0.5 + offsetx + "px";
     //       billdialog.style.top = canvas.height * 0.5 + offsety + "px";
		console.log('else @@@@@billPrompt function: billNodeTopLeftX=' + billNodeTopleftX);
		console.log('else @@@@@billPrompt function: billNodeTopLeftY=' + billNodeTopleftY);
        }


		/*        if (event) {
            dialog.style.left = event.clientX + offsetx + "px";
            dialog.style.top = event.clientY + offsety + "px";
        } else {
            dialog.style.left = canvas.width * 0.5 + offsetx + "px";
            dialog.style.top = canvas.height * 0.5 + offsety + "px";
        }*/

        setTimeout(function() {
            billinput.focus();
        }, 10);
	//	console.log('its the end of the create function');


        return billdialog;
    };

LGraphNode.prototype.addBillWidget = function( type, name, value, callback, options )
	{
	//console.log('----- ----- 22222 addBillWidget drawing widgets of type ' + type);
        if (!this.widgets) {
            this.widgets = [];
        }

		if(!options && callback && callback.constructor === Object)
		{
			options = callback;
			callback = null;
		}

		if(options && options.constructor === String) //options can be the property name
			options = { property: options };

		if(callback && callback.constructor === String) //callback can be the property name
		{
			if(!options)
				options = {};
			options.property = callback;
			callback = null;
		}

		if(callback && callback.constructor !== Function)
		{
			console.warn("addWidget: callback must be a function");
			callback = null;
		}

        var w = {
            type: type.toLowerCase(),
            name: name,
            value: value,
            callback: callback,
            options: options || {}
        };

        if (w.options.y !== undefined) {
            w.y = w.options.y;
        }

        if (!callback && !w.options.callback && !w.options.property) {
            console.warn("LiteGraph addWidget(...) without a callback or property assigned");
        }
        if (type == "combo" && !w.options.values) {
            throw "LiteGraph addWidget('combo',...) requires to pass values in options: { values:['red','blue'] }";
        }
        this.widgets.push(w);
		this.setSize( this.computeSize() );
        return w;
    };


//Show value inside the debug console
function BillShapesNode()
{
	this.addProperty("myCryptoAddress", 'no address');
	console.log('in BillShapenode');
//	console.log('this.text.pos=' + this.text.pos);
//	console.log('this.text.title=' + this.text.value);
	this.addInput("Input","number");
	this.addOutput("Output","number");
//	this.slider = this.addWidget("slider","Slider", 0.5, function(v){}, { min: 0, max: 1} );
//	this.button1 = this.addBillWidget("cabutton","CryptoAddress", "txtBefore", function(v){}, {} );
//	this.button2 = this.addBillWidget("button","Button", null, function(v){}, {} );

//	this.button3 = this.addBillWidget("copybutton","copyButton", null, function(v){}, {} );
//	this.button4 = this.addBillWidget("pastebutton","pasteButton", null, function(v){}, {} );
	this.button5 = this.addBillWidget("databutton","0x123...56789", null, function(v){}, {} );

	this.button6 = this.addBillWidget("copypastebutton", 'cp bttn', null, function(v){}, {} );
	this.text = this.addWidget("text","Text", "edit me", function(v){}, {} );
//	this.text = this.addBillWidget("text","Text", "0x858...2718416", function(v){}, {} );
//	this.slider = this.addWidget("slider","Slider", 0.5, function(v){}, { min: 0, max: 1} );
//	this.slider = this.addWidget("slider","Slider", 0.5, function(v){}, { min: 0, max: 1} );
//	var billDialog = document.createElement("div");
//	billDialog.className = "billgraphdialog rounded";
//	billDialog.innerHTML = "<span class='name'></span> <textarea autofocus class='value'></textarea><button class='rounded'>OK</button>";
//	console.log('billDialog = ' + billDialog.innerHTML)

// end

//var billNodeWhichHalfClick = "none";
//console.log('BillShapenode definition billNodeWhichHalfClick', billNodeWhichHalfClick);
//console.log(billNodeRightHalfClick);


	this.properties = {};
	var that = this;
	this.size = this.computeSize();
	this.enabled = false;  // set to true to turn on the green box
	this.visible = false;  //set to true to turn on the red box

//	this.prompt("myBillPrompt","myInput");
	var w = this.widgets[0];


//	this.pos = [500, 500];
}

BillShapesNode.title = "Bill Shapes 2502";
BillShapesNode.title_mode = LiteGraph.TRANSPARENT_TITLE;
BillShapesNode.slot_start_y = 50;  //padding at the top of the node

BillShapesNode.prototype.onDrawBackground = function(ctx)
{
	//console.log('this', this.pos);
	var myThis = this.getPropertyInfo('myCryptoAddress');
	var myLocalCryptoAddress = myThis.default_value;
	//console.log('myThis', myThis);
	//console.log('myLocalCryptoAddress', myLocalCryptoAddress);
	if(this.flags.collapsed)
		return;

	// draw the default grey box at top of node, 20px high
	ctx.fillStyle = "#555";  //light grey
//	ctx.fillStyle = "#F0F";  //pink
	ctx.fillRect(0,0,this.size[0],20);

	if(this.enabled)
	{
		ctx.fillStyle = "#AFB";  // light green
		ctx.beginPath();
		ctx.moveTo(this.size[0]-20,0);
		ctx.lineTo(this.size[0]-25,20);
		ctx.lineTo(this.size[0],20);
		ctx.lineTo(this.size[0],0);
		ctx.fill();
	}

	if(this.visible)
	{
//		ctx.fillStyle = "#ABF";  //blue
		ctx.fillStyle = "#C00";  //red
		ctx.beginPath();
		ctx.moveTo(this.size[0]-40,0);
		ctx.lineTo(this.size[0]-45,20);
		ctx.lineTo(this.size[0]-25,20);
		ctx.lineTo(this.size[0]-20,0);
		ctx.fill();
	}

	//this is the outline / stroke
	ctx.strokeStyle = "#333";  //grey
	ctx.strokeStyle = "#FF0";  // yellow
	ctx.beginPath();
	ctx.moveTo(0,20);
	ctx.lineTo(this.size[0]+1,20);
	ctx.moveTo(this.size[0]-20,0);
	ctx.lineTo(this.size[0]-25,20);
	ctx.moveTo(this.size[0]-40,0);
	ctx.lineTo(this.size[0]-45,20);
	ctx.stroke();

	if( this.mouseOver )
	{
		ctx.fillStyle = "#AAA";
	//	ctx.fillText( "Example of Bill helper", 0, this.size[1] + 14 );
		ctx.fillText( myLocalCryptoAddress, 0, this.size[1] + 14 );
		
	}
} 

BillShapesNode.prototype.onMouseDown = function(e, pos)
{
//	console.log('at the start of onmouseclick globalBillNodeWhichHalf', globalBillNodeWhichHalf);
	//console.log('billNodeLeftHalfClick', billNodeLeftHalfClick);
	//console.log('billNodeRightHalfClick', billNodeRightHalfClick);
//	globalBillNodeWhichHalf = 'none';
//	console.log('mouseclick pos0 = ' + pos[0]);
//	console.log('mouseclick pos1 = ' + pos[1]);
//	console.log('this.size[0] = ' + this.size[0]);  // this.size[0] is the current width of the node
//	console.log('this.size[1] = ' + this.size[1]);
//	console.log('this.title = ' + this.title);
//	if (pos[0] < this.size[0]/2) {
//		console.log('you clicked on the left, (pos[0] < this.size[0]/2)');
//		globalBillNodeWhichHalf = 'left';
//	} else if (pos[0] > this.size[0]/2) {
//		console.log('you clicked on the right, (pos[0] > this.size[0]/2)');
//		globalBillNodeWhichHalf = 'right';
//	} else {
//		globalBillNodeWhichHalf = 'none';
//	};
	//console.log('after checking position in onmousedown globalBillNodeWhichHalf=', globalBillNodeWhichHalf);
	//globalBillNodeWhichHalf = 'none';
//			this.prompt("Value",w.value,function(v) {
//				inner_value_change(this, v);
//			}.bind(w),
//			event,w.options ? w.options.multiline : false );



			if(pos[1] > 20) // 20 is the height of the box drawn
		return;

	if( pos[0] > this.size[0] - 20)  //check for mouse click 20 pixels from the right of the node
		this.enabled = !this.enabled;
	else if( pos[0] > this.size[0] - 40)
		this.visible = !this.visible;


}



BillShapesNode.prototype.onBounding = function(rect) //increases the size of the bounding box when mouseover, to handle the advisory comment
{
//	console.log('mouse has entered node area');
	if(!this.flags.collapsed && this.mouseOver )
//	console.log('mouse has inside node area' + this.mouseOver.pos);
		rect[3] = this.size[1] + 20;
}

LiteGraph.registerNodeType("features/billshape", BillShapesNode );


