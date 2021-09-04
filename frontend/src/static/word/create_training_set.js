let termRows = ''

let termRow =
                                '<div class="TermRows-termRowWrap" data-term-luid="term-0">\n' +
                                    '<div class="TermRow">\n' +
                                        '<div class="TermRow-bareSide TermRow-bareSide--word TermText">&nbsp;</div>\n' +
                                        '<div class="TermRow-bareSide TermRow-bareSide--definition TermText">&nbsp;</div>\n' +
                                        '<div class="TermContent has-richTextToolbar rt-clean-design">\n' +
                                            '<div class="TermContent-inner" draggable="true">\n' +
                                                '<div class="StudiableItemToolbar">\n' +
                                                    '<span class="StudiableItemToolbar-counter"></span>\n' +
                                                    '<div class="StudiableItemToolbar-editableToggles"></div>\n' +
                                                    '<div class="StudiableItemToolbar-dragToggle">\n' +
                                                        '<span class="ContextToggle">\n' +
                                                            '<span class="UIIconButton">\n' +
                                                                '<button class="UIButton UIButton--borderless" tabindex="-1" type="button" disabled="">\n' +
                                                                    '<span class="UIButton-wrapper">\n' +
                                                                        '<svg aria-label="drag" class="UIIcon UIIcon--drag" role="img"><noscript></noscript><use xlink:href="#drag"></use><noscript></noscript></svg>\n' +
                                                                    '</span>\n' +
                                                                '</button>\n' +
                                                            '</span>\n' +
                                                        '</span>\n' +
                                                    '</div>\n' +
                                                    '<div class="StudiableItemToolbar-actionableToggles">\n' +
                                                        '<span class="ContextToggle">\n' +
                                                            '<span class="UIIconButton is-Popover is-Tooltip UIOverlayTrigger-target">\n' +
                                                                '<button aria-label="카드 삭제" class="UIButton UIButton--borderless" tabindex="-1" type="button">\n' +
                                                                    '<span class="UIButton-wrapper">\n' +
                                                                        '<svg aria-label="delete" class="UIIcon UIIcon--garbage" role="img"><noscript></noscript><use xlink:href="#garbage"></use><noscript></noscript></svg>\n' +
                                                                    '</span>\n' +
                                                                '</button>\n' +
                                                            '</span>\n' +
                                                        '</span>\n' +
                                                    '</div>\n' +
                                                '</div>\n' +
                                                '<div class="TermContent-inner-padding">\n' +
                                                    '<div class="TermContent-sides" draggable="true">\n' +
                                                        '<div class="TermContent-sideWrap">\n' +
                                                            '<div class="TermContent-side TermContent-side--word">\n' +
                                                                '<div class="WordSide">\n' +
                                                                    '<div class="RichTextEditor">\n' +
                                                                        '<div class="PMEditor notranslate" data-testid="PMEditor">\n' +
                                                                            '<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-term-side" class="ProseMirror">\n' +
                                                                                '<p><br></p>\n' +
                                                                            '</div>\n' +
                                                                        '</div>\n' +
                                                                        '<div class="PMEditor-border"></div>\n' +
                                                                        '<span></span>\n' +
                                                                        '<span class="RichTextEditor-label">\n' +
                                                                            '<div class="RichTextEditor-labelText">단어</div>\n' +
                                                                        '</span>\n' +
                                                                    '</div>\n' +
                                                                '</div>\n' +
                                                                '<span></span>\n' +
                                                            '</div>\n' +
                                                            '<div class="TermContent-side TermContent-side--definition">\n' +
                                                                '<div class="DefinitionSide">\n' +
                                                                    '<div class="DefinitionSide-richTextEditor">\n' +
                                                                        '<div class="DefinitionSide-imageContainer">\n' +
                                                                            '<div class="ImageUploadComponent">\n' +
                                                                                '<div data-testid="ImageUploadComponent-contextToggle">\n' +
                                                                                    '<span class="ContextToggle">\n' +
                                                                                        '<div class="ImageUploadProminentContextToggle" data-testid="ImageUploadProminentContextToggle">\n' +
                                                                                            '<svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript><use xlink:href="#image"></use><noscript></noscript></svg>\n' +
                                                                                            '<div class="ImageUploadProminentContextToggle-IconExplanation">\n' +
                                                                                                '<span>이미지</span>\n' +
                                                                                            '</div>\n' +
                                                                                        '</div>\n' +
                                                                                    '</span>\n' +
                                                                                '</div>\n' +
                                                                            '</div>\n' +
                                                                        '</div>\n' +
                                                                        '<div class="RichTextEditor">\n' +
                                                                            '<div class="PMEditor notranslate" data-testid="PMEditor">\n' +
                                                                                '<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-definition-side" class="ProseMirror">\n' +
                                                                                    '<p><br></p>\n' +
                                                                                '</div>\n' +
                                                                            '</div>\n' +
                                                                            '<div class="PMEditor-border"></div>\n' +
                                                                            '<span></span>\n' +
                                                                            '<span class="RichTextEditor-label">\n' +
                                                                                '<div class="RichTextEditor-labelText">뜻</div>\n' +
                                                                            '</span>\n' +
                                                                        '</div>\n' +
                                                                    '</div>\n' +
                                                                '</div>\n' +
                                                                '<span></span>\n' +
                                                            '</div>\n' +
                                                        '</div>\n' +
                                                    '</div>\n' +
                                                '</div>\n' +
                                            '</div>\n' +
                                            '<div class="TermContent-contexts">\n' +
                                                '<span></span>\n' +
                                                '<span></span>\n' +
                                                '<span></span>\n' +
                                                '<span></span>\n' +
                                            '</div>\n' +
                                        '</div>\n' +
                                    '</div>\n' +
                                '</div>\n' +
	
                                '<div class="TermRowSeparator" data-term-luid="term-0">\n' +
                                    '<span class="TermRowSeparator-addRowBetweenButton">\n' +
                                        '<span class="UIIconButton">\n' +
                                            '<button class="UIButton" tabindex="-1" title="+ 카드 추가" type="button">\n' +
                                                '<span class="UIButton-wrapper">\n' +
                                                    '<svg aria-label="plus thin" class="UIIcon UIIcon--plus-thin" role="img"><noscript></noscript><use xlink:href="#plus-thin"></use><noscript></noscript></svg>\n' +
                                                '</span>\n' +
                                            '</button>\n' +
                                        '</span>\n' +
                                    '</span>\n' +
                                '</div>\n'

let addRow =

								'<div class="TermRows-termRowWrap" data-term-luid="term-5">\n' +
									'<div class="TermRow is-phantom">\n' +
										'<div class="TermRow-bareSide TermRow-bareSide--word TermText">&nbsp;</div>\n' +
										'<div class="TermRow-bareSide TermRow-bareSide--definition TermText">&nbsp;</div>\n' +
										'<div class="TermContent has-richTextToolbar rt-clean-design">\n' +
											'<div class="TermContent-inner" draggable="true">\n' +
												'<div class="TermContent-inner-padding">\n' +
													'<div class="TermContent-sides" draggable="true">\n' +
														'<div class="TermContent-sideWrap">\n' +
															'<div class="TermContent-side TermContent-side--word">\n' +
																'<div class="WordSide">\n' +
																	'<div class="RichTextEditor">\n' +
																		'<div class="PMEditor notranslate" data-testid="PMEditor">\n' +
																			'<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-term-side" class="ProseMirror">\n' +
																				'<p><br></p>\n' +
																			'</div>\n' +
																		'</div>\n' +
																		'<div class="PMEditor-border"></div>\n' +
																		'<span></span>\n' +
																		'<span class="RichTextEditor-label">\n' +
																			'<div class="RichTextEditor-labelText">단어</div>\n' +
																		'</span>\n' +
																	'</div>\n' +
																'</div>\n' +
																'<span></span>\n' +
															'</div>\n' +
															'<div class="TermContent-side TermContent-side--definition">\n' +
																'<div class="DefinitionSide">\n' +
																	'<div class="DefinitionSide-richTextEditor">\n' +
																		'<div class="DefinitionSide-imageContainer">\n' +
																			'<div class="ImageUploadComponent">\n' +
																				'<div data-testid="ImageUploadComponent-contextToggle">\n' +
																					'<span class="ContextToggle">\n' +
																						'<div class="ImageUploadProminentContextToggle" data-testid="ImageUploadProminentContextToggle">\n' +
																							'<svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript><use xlink:href="#image"></use><noscript></noscript></svg>\n' +
																							'<div class="ImageUploadProminentContextToggle-IconExplanation">\n' +
																								'<span>이미지</span>\n' +
																							'</div>\n' +
																						'</div>\n' +
																					'</span>\n' +
																				'</div>\n' +
																			'</div>\n' +
																		'</div>\n' +
																		'<div class="RichTextEditor">\n' +
																			'<div class="PMEditor notranslate" data-testid="PMEditor">\n' +
																				'<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-definition-side" class="ProseMirror">\n' +
																					'<p><br></p>\n' +
																				'</div>\n' +
																			'</div>\n' +
																			'<div class="PMEditor-border"></div>\n' +
																			'<span></span>\n' +
																			'<span class="RichTextEditor-label">\n' +
																				'<div class="RichTextEditor-labelText">뜻</div>\n' +
																			'</span>\n' +
																		'</div>\n' +
																	'</div>\n' +
																'</div>\n' +
																'<span></span>\n' +
															'</div>\n' +
															'<a class="TermContent-addRow" id="addRow">\n' +
																'<span class="TermContent-addRowButton">\n' +
																	'<button aria-label="+ 카드 추가" class="UILinkButton" type="button">\n' +
																		'<span>+ 카드 추가</span>\n' +
																	'</button>\n' +
																'</span>\n' +
															'</a>\n' +
														'</div>\n' +
													'</div>\n' +
													'<span class="TermContent-counter"></span>\n' +
												'</div>\n' +
											'</div>\n' +
											'<div class="TermContent-contexts">\n' +
												'<span></span><span></span><span></span><span></span>\n' +
											'</div>\n' +
										'</div>\n' +
									'</div>\n' +
								'</div>\n'

for (let i = 0; i < 5; i++) {
	termRows += termRow
	if (i === 4) {
		termRows += addRow
	}
}
$('.termRows').html(termRows)
