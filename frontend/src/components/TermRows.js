
let TermRow =(id) =>            <div class="TermRows-termRowWrap" data-term-luid="term-0">
                                    <div class="TermRow">
                                        <div class="TermRow-bareSide TermRow-bareSide--word TermText">&nbsp;</div>
                                        <div class="TermRow-bareSide TermRow-bareSide--definition TermText">&nbsp;</div>
                                        <div class="TermContent has-richTextToolbar rt-clean-design">
                                            <div class="TermContent-inner" draggable="true">
                                                <div class="StudiableItemToolbar">
                                                    <span class="StudiableItemToolbar-counter"></span>
                                                    <div class="StudiableItemToolbar-editableToggles"></div>
                                                    <div class="StudiableItemToolbar-dragToggle">
                                                        <span class="ContextToggle">
                                                            <span class="UIIconButton">
                                                                <button class="UIButton UIButton--borderless" tabindex="-1" type="button" disabled="">
                                                                    <span class="UIButton-wrapper">
                                                                        <svg aria-label="drag" class="UIIcon UIIcon--drag" role="img"><noscript></noscript><use xlinkHref="#drag"></use><noscript></noscript></svg>
                                                                    </span>
                                                                </button>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="StudiableItemToolbar-actionableToggles">
                                                        <span class="ContextToggle">
                                                            <span class="UIIconButton is-Popover is-Tooltip UIOverlayTrigger-target">
                                                                <button aria-label="카드 삭제" class="UIButton UIButton--borderless" tabindex="-1" type="button">
                                                                    <span class="UIButton-wrapper">
                                                                        <svg aria-label="delete" class="UIIcon UIIcon--garbage" role="img"><noscript></noscript><use xlinkHref="#garbage"></use><noscript></noscript></svg>
                                                                    </span>
                                                                </button>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="TermContent-inner-padding">
                                                    <div class="TermContent-sides" draggable="true">
                                                        <div class="TermContent-sideWrap">
                                                            <div class="TermContent-side TermContent-side--word">
                                                                <div class="WordSide">
                                                                    <div class="RichTextEditor">
                                                                        <div class="PMEditor notranslate" data-testid="PMEditor" style={{'height': '30px'}}>
                                                                            <input class="ProseMirror"  id={`wordKey${id}`} style={{'width': '100%', 'background-color': 'transparent', 'border-style': 'none', 'font-size': '20px'}}>
                                                                            </input>
                                                                        </div>
                                                                        <div class="PMEditor-border"></div>
                                                                        <span></span>
                                                                        <span class="RichTextEditor-label">
                                                                            <div class="RichTextEditor-labelText">단어</div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <span></span>
                                                            </div>
                                                            <div class="TermContent-side TermContent-side--definition">
                                                                <div class="DefinitionSide">
                                                                    <div class="DefinitionSide-richTextEditor">
                                                                        <div class="DefinitionSide-imageContainer">
                                                                            <div class="ImageUploadComponent">
                                                                                <div data-testid="ImageUploadComponent-contextToggle">
                                                                                    <span class="ContextToggle">
                                                                                        <div class="ImageUploadProminentContextToggle" data-testid="ImageUploadProminentContextToggle">
                                                                                        <svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript><use xlinkHref="#image"></use><noscript></noscript></svg>
                                                                                            <div class="ImageUploadProminentContextToggle-IconExplanation">
                                                                                                <span>이미지</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="RichTextEditor">
                                                                            <div class="PMEditor notranslate" data-testid="PMEditor" style={{'height': '30px'}}>
                                                                                <input class="ProseMirror" id={`wordValue${id}`} style={{'width': '100%', 'background-color': 'transparent', 'border-style': 'none', 'font-size': '20px'}}>
                                                                                </input>
                                                                            </div>
                                                                            <div class="PMEditor-border"></div>
                                                                            <span></span>
                                                                            <span class="RichTextEditor-label">
                                                                                <div class="RichTextEditor-labelText">뜻</div>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="TermContent-contexts"><span></span><span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>

let TermRowSeparator = <div class="TermRowSeparator" data-term-luid="term-0">
<span class="TermRowSeparator-addRowBetweenButton">
    <span class="UIIconButton">
        <button class="UIButton" tabindex="-1" title="+ 카드 추가" type="button">
            <span class="UIButton-wrapper">
                <svg aria-label="plus thin" class="UIIcon UIIcon--plus-thin" role="img"><noscript></noscript><use xlinkHref="#plus-thin"></use><noscript></noscript></svg>
            </span>
        </button>
    </span>
</span>
</div>

let AddRow =(pulseTermRowsNum) =>
								<div class="TermRows-termRowWrap AddRow" data-term-luid="term-5">
									<div class="TermRow is-phantom">
										<div class="TermRow-bareSide TermRow-bareSide--word TermText">&nbsp;</div>
										<div class="TermRow-bareSide TermRow-bareSide--definition TermText">&nbsp;</div>
										<div class="TermContent has-richTextToolbar rt-clean-design">
											<div class="TermContent-inner" draggable="true">
												<div class="TermContent-inner-padding">
													<div class="TermContent-sides" draggable="true">
														<div class="TermContent-sideWrap">
															<div class="TermContent-side TermContent-side--word">
																<div class="WordSide">
																	<div class="RichTextEditor">
																		<div class="PMEditor notranslate" data-testid="PMEditor">
																			<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-term-side" class="ProseMirror">
																				<p><br/></p>
																			</div>
																		</div>
																		<div class="PMEditor-border"></div>
																		<span></span>
																		<span class="RichTextEditor-label">
																			<div class="RichTextEditor-labelText">단어</div>
																		</span>
																	</div>
																</div>
																<span></span>
															</div>
															<div class="TermContent-side TermContent-side--definition">
																<div class="DefinitionSide">
																	<div class="DefinitionSide-richTextEditor">
																		<div class="DefinitionSide-imageContainer">
																			<div class="ImageUploadComponent">
																				<div data-testid="ImageUploadComponent-contextToggle">
																					<span class="ContextToggle">
																						<div class="ImageUploadProminentContextToggle" data-testid="ImageUploadProminentContextToggle">
																							<svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript><use xlinkHref="#image"><use xlinkHref="#plus-thin"></use></use><noscript></noscript></svg>
																							<div class="ImageUploadProminentContextToggle-IconExplanation">
																								<span>이미지</span>
																							</div>
																						</div>
																					</span>
																				</div>
																			</div>
																		</div>
																		<div class="RichTextEditor">
																			<div class="PMEditor notranslate" data-testid="PMEditor">
																				<div contenteditable="true" tabindex="7" role="textbox" aria-multiline="true" aria-labelledby="editor-definition-side" class="ProseMirror">
																					<p><br/></p>
																				</div>
																			</div>
																			<div class="PMEditor-border"></div>
																			<span></span>
																			<span class="RichTextEditor-label">
																				<div class="RichTextEditor-labelText">뜻</div>
																			</span>
																		</div>
																	</div>
																</div>
																<span></span>
															</div>
															<button class="TermContent-addRow" id="addRow" onClick={pulseTermRowsNum}>
																<span class="TermContent-addRowButton">
																	<button aria-label="+ 카드 추가" class="UILinkButton" type="button">
																		<span>+ 카드 추가</span>
																	</button>
																</span>
															</button>
														</div>
													</div>
													<span class="TermContent-counter"></span>
												</div>
											</div>
											<div class="TermContent-contexts">
												<span></span><span></span><span></span><span></span>
											</div>
										</div>
									</div>
								</div>

export default function TermRows({termRowsNum, setTermRowsNum}) {
    let newTermRows = [];
    const pulseTermRowsNum = () => {setTermRowsNum(termRowsNum + 1)}

    for (let i = 1; i <= termRowsNum; i++) {
        if (i == termRowsNum) {
            newTermRows.push(TermRow(i))
            newTermRows.push(AddRow(pulseTermRowsNum))
        } else {
            newTermRows.push(TermRow(i))
            newTermRows.push(TermRowSeparator)
        }
    }
    return newTermRows
}
