import './static/word/create_training_set.css'
import { useHistory } from "react-router-dom";

let TermRow =() => <>
                                <div class="TermRows-termRowWrap" data-term-luid="term-0">
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
                                                                        <svg aria-label="drag" class="UIIcon UIIcon--drag" role="img"><noscript></noscript><noscript></noscript></svg>
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
                                                                        <svg aria-label="delete" class="UIIcon UIIcon--garbage" role="img"><noscript></noscript><noscript></noscript></svg>
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
                                                                                            <svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript><noscript></noscript></svg>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="TermContent-contexts">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="TermRowSeparator" data-term-luid="term-0">
                                    <span class="TermRowSeparator-addRowBetweenButton">
                                        <span class="UIIconButton">
                                            <button class="UIButton" tabindex="-1" title="+ 카드 추가" type="button">
                                                <span class="UIButton-wrapper">
                                                    <svg aria-label="plus thin" class="UIIcon UIIcon--plus-thin" role="img"><noscript></noscript><noscript></noscript></svg>
                                                </span>
                                            </button>
                                        </span>
                                    </span>
                                </div>
                                </>

let AddRow =() =>
								<div class="TermRows-termRowWrap" data-term-luid="term-5">
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
																							<svg aria-label="image" class="UIIcon UIIcon--image UIIcon--large" role="img"><noscript></noscript></svg>
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
															<a class="TermContent-addRow" id="addRow">
																<span class="TermContent-addRowButton">
																	<button aria-label="+ 카드 추가" class="UILinkButton" type="button">
																		<span>+ 카드 추가</span>
																	</button>
																</span>
															</a>
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

let create_training_set = <div id="SetPageTarget">
        <div class="CreateSetPage">
            <div class="CreateSetHeader has-adz">
                <div class="CreateSetHeader-stickyPlaceholder">
                    <div class="CreateSetHeader-sticky">
                        <div class="UIContainer">
                            <div class="CreateSetHeader-heading">
                                <div class="CreateSetHeader-headingText">
                                    <div class="CreateSetHeader-title">
                                    <span>학습 세트 만들기</span>
                                    </div>
                                </div>
                                <div class="CreateSetHeader-adz">
                                    <div class="CreateSetHeader-adzContainer">
                                        <div class="CreateSetHeader-adzWrapper"></div>
                                    </div>
                                </div>
                                <div class="CreateSetHeader-infoButtonWrap">
                                    <button class="UIButton" type="button">
                                        <span class="UIButton-wrapper"><span>만들기</span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="UIContainer">
                    <div class="c1ob9zsr">
                        <div class="t1m1tupm h173eb8f">
                            <div>
                                <div class="collapsed cr8mmtp">
                                    <div class="b1859v0f"></div>
                                </div>
                                <label class="AssemblyInput">
                                    <input aria-label="제목" class="AssemblyInput-input AssemblyInput-placeholder" maxlength="255" placeholder="제목을 입력하세요, 예: 생물학 - 22장: 진화" type="text" value=""/>
                                </label>
                            </div>
                        </div>
                        <div class="d1v2q8ty h173eb8f">
                            <div class="cnufec0">
                                <label class="t1kgauu">
                                    <div class="a16bbkbz">
                                        <div class="asc1vt2">
                                            <div class="a17bzrsx">undefined</div>
                                            <div class="a1fcz3cu" style={{'--a1fcz3cu-0':'7.5rem'}}>
                                                <textarea placeholder="설명을 추가하세요..." class="a161zioz bxtl8jy a1k2umqi dl0f14n" aria-label="설명"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <div class="collapsed c89bze8"><div class="b1859v0f"></div></div>
                            </div>
                        </div>
                        <div class="e1aqfemz">
                            <div class="s12ui71j h173eb8f">
                                <div class="SchoolSelector">
                                    <div class="">
                                        <div>
                                            <div class="SchoolAutosuggest">
                                                <div class="UIAutosuggest">
                                                    <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container">
                                                        <label class="AssemblyInput">
                                                            <input autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="AssemblyInput-input AssemblyInput-placeholder" aria-label="학교 이름" placeholder="학교 이름" type="text" value=""/>
                                                            <div class="ionmch8">
                                                                <button tabindex="-1" type="button" aria-label="info" class="AssemblyButtonBase AssemblyIconButton--subtle AssemblyIconButton--circle AssemblyButtonBase--medium is-Popover is-Tooltip UIOverlayTrigger-target">
                                                                    <svg aria-label="info" class="AssemblyIcon AssemblyIcon--medium" role="img"><noscript></noscript><noscript></noscript></svg>
                                                                </button>
                                                            </div>
                                                        </label>
                                                        <div id="react-autowhatever-1" role="listbox" class="SchoolAutosuggest-suggestionsContainer react-autosuggest__suggestions-container" style={{'top': '48px', 'z-index': '100'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cia7d2e h173eb8f">
                                <label aria-disabled="true" class="AssemblyInput AssemblyInput--disabled">
                                    <input aria-label="코스" class="AssemblyInput-input AssemblyInput-placeholder" disabled="" placeholder="코스" type="text" value=""/>
                                    <div class="ionmch8">
                                        <button tabindex="-1" disabled="" type="button" aria-label="info" class="AssemblyButtonBase AssemblyIconButton--subtle AssemblyIconButton--circle AssemblyButtonBase--medium is-Popover is-Tooltip UIOverlayTrigger-target">
                                            <svg aria-label="info" class="AssemblyIcon AssemblyIcon--medium" role="img"><noscript></noscript><noscript></noscript></svg>
                                        </button>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="UIContainer">
                    <div class="UIDiv CreateSetHeader-permissionsAndImport">
                        <a class="AssemblyLink AssemblyLink--medium AssemblyLink--primary" href="#">
                            <span>+ Word, Excel, Google Docs 등 데이터 불러오기 기능</span>
                        </a>
                        <div class="CreateSetHeader-permissionsWrap">
                            <div class="CreateSetHeader-permissionWrap">
                                <div class="CreateSetHeader-permissionsLink">전체 공개</div>
                                <a class="AssemblyLink AssemblyLink--medium AssemblyLink--primary" href="#">
                                    <span>변경</span>
                                </a>
                            </div>
                            <div class="CreateSetHeader-permissionWrap">
                                <div class="CreateSetHeader-permissionsLink">수정 권한: 나만</div>
                                <a class="AssemblyLink AssemblyLink--medium AssemblyLink--primary" href="#">
                                    <span>변경</span>
                                </a>
                            </div>
                            <div class="CreateSetHeader-permissionWrap">
                                <span class="MenuIconWithTooltip is-Popover is-Tooltip UIOverlayTrigger-target">
                                    <span class="UIIconButton">
                                        <button class="UIButton" disabled="" title="단어와 뜻의 위치 바꾸기" type="button">
                                            <span class="UIButton-wrapper">
                                                <svg aria-label="switch" class="UIIcon UIIcon--switch" role="img"><noscript></noscript><noscript></noscript></svg>
                                            </span>
                                        </button>
                                    </span>
                                </span>
                                <span class="MenuIconWithTooltip is-bottomright is-Popover is-Tooltip UIOverlayTrigger-target">
                                    <span class="UIIconButton">
                                        <button class="UIButton" title="단축키" type="button">
                                            <span class="UIButton-wrapper">
                                                <svg aria-label="keyboard" class="UIIcon UIIcon--keyboard" role="img"><noscript></noscript><noscript></noscript></svg>
                                            </span>
                                        </button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="UIContainer">
                    <span></span>
                </div>
            </div>
            <div class="CreateSetPage-container">
                <div class="CreateSetDiagramUploader">
                    <div class="UIFloatedCardBackdrop">
                        <div class="UIFloatedCardBackdrop-content">
                            <div class="UIContainer">
                                <div class="UIFloatedCard UIFloatedCard--white">
                                    <div class="UIFileChooser">
                                        <form class="UIFileChooser-form">
                                            <input accept="image/bmp,image/jpeg,image/png" aria-label="업로드할 파일을 선택하세요" capture="environment" class="UIFileChooser-input js-keymaster-allow" name="UIFileChooser2" type="file"/>
                                        </form>
                                        <div class="UIFileChooser-contents">
                                            <div class="CreateSetDiagramUploader-banner">
                                                <div class="CreateSetDiagramUploader-bannerInfoIcon CreateSetDiagramUploader-bannerInfoIcon--inverted">
                                                    <span class="UIIconButton">
                                                        <button class="UIButton UIButton--white" type="button">
                                                            <span class="UIButton-wrapper">
                                                                <svg aria-label="info" class="UIIcon UIIcon--info-inverse" role="img"><noscript></noscript><noscript></noscript></svg>
                                                            </span>
                                                        </button>
                                                    </span>
                                                </div>
                                                <div class="CreateSetDiagramUploader-bannerImage"></div>
                                                <div class="CreateSetDiagramUploader-bannerText">
                                                    <h4 class="UIHeading UIHeading--four"><span>다이어그램 추가 및 라벨 붙이기</span></h4>
                                                    <p class="UIParagraph">
                                                        <span>이미지를 드래그하거나
                                                            <a class="UILink" data-testid="UILink-anchor" href="#"><span>선택하세요</span></a>.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="UIFloatedCardBackdrop-bottom" style={{'height': '50%'}}></div>
                    </div>
                </div>
                <div class="UIContainer">
                    <div class="CreateSetPage-list">
                        <div class="StudiableItems">
                            <div class="e1phsipe" id="editor-term-side">단어</div>
                            <div class="e1phsipe" id="editor-definition-side">뜻</div>
                            <div class="e1phsipe" id="editor-question-side">문제</div>
                            <div class="e1phsipe" id="editor-answer-side">답</div>
                            <div class="e1phsipe" id="editor-custom-distractor">객관식 문제 옵션</div>
                            <div class="TermRows">
                                <TermRow />
                                <TermRow />
                                <TermRow />
                                <TermRow />
                                <TermRow />
                                <AddRow />

                                <div>

                </div>
		<div class="VoiceRecordingPermissionsModal">
			<div class="VoiceRecordingPermissionsModal-content">
                		<p>
				<span>음성 녹음 기능을 사용하시려면 컴퓨터의 마이크 이용 권한을 허가해 주세요.</span>
				</p>
			</div>
		</div>
			</div>
		    </div>
		    <div class="CreateSetPage-footer">
			    <div class="CreateSetPage-publishButton">
            <button class="UIButton UIButton--hero" type="button"><span class="UIButton-wrapper"><span>만들기</span></span></button></div></div></div></div></div><div class="ImportTerms is-hidden">
            <div class="ImportTerms-import"><div class="UIContainer"><div class="ImportTerms-cancelImportButtonWrap"><button aria-label="취소" class="UILinkButton" type="button"><span>취소</span></button>
            </div><span class="ImportTerms-heading"><span>데이터 불러오기</span></span> <span class="ImportTerms-instructions"><span>데이터를 복사하여 붙여넣으세요. (Microsoft Word, Excel, Google Docs, 기타)</span></span>
                <form class="ImportTerms-form"><textarea class="ImportTerms-textarea" placeholder="단어 1	뜻 1
단어 2	뜻 2
단어 3	뜻 3"></textarea><div class="ImportTerms-importButtonWrap"><button aria-label="불러오기" class="UIButton UIButton--hero" disabled="" type="button"><span class="UIButton-wrapper">
        <span>불러오기</span>
    </span></button></div><div class="ImportTerms-formGroupWrap"><div class="ImportTerms-formGroup"><label class="ImportTerms-formLabel"><span>단어 / 뜻 구분자</span>
                </label><div class="UIDiv UIRadioGroup"><label class="UIRadio" for="ui-control-534818a8-053c-4179-b28a-bed13b90cb5e">
                    <input class="UIRadio-input" id="ui-control-534818a8-053c-4179-b28a-bed13b90cb5e" type="radio" value="Delimiter.TAB" checked=""/>
                    <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>↹</span></span></label>
                    <label class="UIRadio" for="ui-control-0a4af28c-05eb-4bdf-937f-b8d5eb74939f">
                    <input class="UIRadio-input" id="ui-control-0a4af28c-05eb-4bdf-937f-b8d5eb74939f" type="radio" value="Delimiter.COMMA"/><span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>반점(,)</span>
                </span></label>
                <label class="UIRadio" for="ui-control-78059866-ee92-47c9-ba72-7c4fe757000d"><input class="UIRadio-input" id="ui-control-78059866-ee92-47c9-ba72-7c4fe757000d" type="radio" value="Delimiter.CUSTOM"/>
                    <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span class="ImportTerms-formCustomDelimiter"><label class="UIInput"><div class="UIInput-content">
                        <input placeholder="-" class="UIInput-input" type="text" value=""/><span class="UIInput-border"></span></div><span class="UIInput-label"><span>사용자 지정</span></span></label>
                    </span></span></label></div></div><div class="ImportTerms-formGroup"><label class="ImportTerms-formLabel"><span>카드 구분</span></label><div class="UIDiv UIRadioGroup">
                    <label class="UIRadio" for="ui-control-f5e817a6-c01e-4193-97c1-99ef6162b5fa"><input class="UIRadio-input" id="ui-control-f5e817a6-c01e-4193-97c1-99ef6162b5fa" type="radio" value="Delimiter.NEWLINE" checked=""/>
                        <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>다음 줄</span></span></label><label class="UIRadio" for="ui-control-cf2fdb1a-e33a-4b0d-b2a5-0bf5f4835d26">
                    <input class="UIRadio-input" id="ui-control-cf2fdb1a-e33a-4b0d-b2a5-0bf5f4835d26" type="radio" value="Delimiter.SEMICOLON"/><span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>쌍반점 (;)</span></span>
                </label><label class="UIRadio" for="ui-control-d9f7970a-b229-4653-b6b2-ca9afb9639e9"><input class="UIRadio-input" id="ui-control-d9f7970a-b229-4653-b6b2-ca9afb9639e9" type="radio" value="Delimiter.CUSTOM"/>
                    <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span class="ImportTerms-formCustomDelimiter"><label class="UIInput"><div class="UIInput-content">
                        <input placeholder="\n\n" class="UIInput-input" type="text" value=""/><span class="UIInput-border"></span></div><span class="UIInput-label"><span>사용자 지정</span></span></label></span></span></label></div></div>
                </div>
                </form>
            </div>
            </div>
            <div>

            </div>
            <div class="ImportTerms-preview"><div>

            </div>
                <div class="UIContainer">
                    <h4 class="UIHeading UIHeading--four"><span>미리보기</span></h4>
                    <div class="ImportTerms-previewRows"><p>미리보기가 없습니다.</p>
        </div>
        </div>
        </div>
        </div>
            <div class="SetPermissions"></div>
        </div>
    </div>

function Create_training_set_jsx() {
    let history = useHistory();
    return create_training_set
}
export default Create_training_set_jsx