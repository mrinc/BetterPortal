import type {
  ButtonOption,
  DataTableItem,
  DataTableColumnSource,
  DataTableSortingOrder,
  DataTableSortingOptions,
  DataTableFilterMethod,
  DataTableSelectMode,
  DataTableRowBind,
  DataTableCellBind,
  VaFile,
  SelectDropdownIcon,
  TreeNode,
} from "vuestic-ui";
import type {
  DateInputModelValue,
  DateInputValue,
} from "vuestic-ui/dist/types/components/va-date-input/types";
import type {
  DatePickerView,
  DatePickerType,
  DatePickerMode,
  DatePickerModelValue,
} from "vuestic-ui/dist/types/components/va-date-picker/types";
import type { DropdownOffsetProp } from "vuestic-ui/dist/types/components/va-dropdown/types";
import type {
  SplitLimit,
  SnappingMark,
} from "vuestic-ui/dist/types/components/va-split/types";
import type {
  TreeViewPropKey,
  TreeViewFilterMethod,
} from "vuestic-ui/dist/types/components/va-tree-view/types";
import type {
  MaybeHTMLElementOrSelector,
  Placement,
  SelectableOption,
} from "vuestic-ui/dist/types/composables";
import type {
  Props,
  Presets,
} from "vuestic-ui/dist/types/services/component-config";

export type VuesticConfigConfig = {
  colors?:
    | {
        variables?:
          | {
              [x: string]: string | undefined;
              primary?: string | undefined;
              secondary?: string | undefined;
              success?: string | undefined;
              info?: string | undefined;
              danger?: string | undefined;
              warning?: string | undefined;
              backgroundPrimary?: string | undefined;
              backgroundSecondary?: string | undefined;
              backgroundElement?: string | undefined;
              backgroundBorder?: string | undefined;
              textPrimary?: string | undefined;
              textInverted?: string | undefined;
              shadow?: string | undefined;
              focus?: string | undefined;
            }
          | undefined;
        threshold?: number | undefined;
        presets?:
          | {
              [x: string]:
                | {
                    [x: string]: string | undefined;
                    primary?: string | undefined;
                    secondary?: string | undefined;
                    success?: string | undefined;
                    info?: string | undefined;
                    danger?: string | undefined;
                    warning?: string | undefined;
                    backgroundPrimary?: string | undefined;
                    backgroundSecondary?: string | undefined;
                    backgroundElement?: string | undefined;
                    backgroundBorder?: string | undefined;
                    textPrimary?: string | undefined;
                    textInverted?: string | undefined;
                    shadow?: string | undefined;
                    focus?: string | undefined;
                  }
                | undefined;
              light?:
                | {
                    [x: string]: string | undefined;
                    primary?: string | undefined;
                    secondary?: string | undefined;
                    success?: string | undefined;
                    info?: string | undefined;
                    danger?: string | undefined;
                    warning?: string | undefined;
                    backgroundPrimary?: string | undefined;
                    backgroundSecondary?: string | undefined;
                    backgroundElement?: string | undefined;
                    backgroundBorder?: string | undefined;
                    textPrimary?: string | undefined;
                    textInverted?: string | undefined;
                    shadow?: string | undefined;
                    focus?: string | undefined;
                  }
                | undefined;
              dark?:
                | {
                    [x: string]: string | undefined;
                    primary?: string | undefined;
                    secondary?: string | undefined;
                    success?: string | undefined;
                    info?: string | undefined;
                    danger?: string | undefined;
                    warning?: string | undefined;
                    backgroundPrimary?: string | undefined;
                    backgroundSecondary?: string | undefined;
                    backgroundElement?: string | undefined;
                    backgroundBorder?: string | undefined;
                    textPrimary?: string | undefined;
                    textInverted?: string | undefined;
                    shadow?: string | undefined;
                    focus?: string | undefined;
                  }
                | undefined;
            }
          | undefined;
        currentPresetName?: string | undefined;
      }
    | undefined;
  icons?:
    | (
        | {
            name?: string | undefined;
            resolve?: {} | undefined;
            attrs?:
              | {
                  [x: string]: string | {} | undefined;
                }
              | undefined;
            component?: any;
            content?: string | undefined;
            class?: string | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            rotation?: string | number | undefined;
            spin?: boolean | "clockwise" | "counter-clockwise" | undefined;
            to?: string | undefined;
          }
        | {
            name?:
              | {
                  exec?: {} | undefined;
                  test?: {} | undefined;
                  readonly source?: string | undefined;
                  readonly global?: boolean | undefined;
                  readonly ignoreCase?: boolean | undefined;
                  readonly multiline?: boolean | undefined;
                  lastIndex?: number | undefined;
                  compile?: {} | undefined;
                  readonly flags?: string | undefined;
                  readonly sticky?: boolean | undefined;
                  readonly unicode?: boolean | undefined;
                  readonly dotAll?: boolean | undefined;
                  [Symbol.match]?: {} | undefined;
                  [Symbol.replace]?: {} | undefined;
                  [Symbol.search]?: {} | undefined;
                  [Symbol.split]?: {} | undefined;
                  [Symbol.matchAll]?: {} | undefined;
                }
              | undefined;
            resolveFromRegex?: {} | undefined;
            attrs?:
              | {
                  [x: string]: string | {} | undefined;
                }
              | undefined;
            component?: any;
            content?: string | undefined;
            class?: string | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            rotation?: string | number | undefined;
            spin?: boolean | "clockwise" | "counter-clockwise" | undefined;
            to?: string | undefined;
          }
        | undefined
      )[]
    | undefined;
  components?:
    | Partial<
        {
          VaAccordion: {
            preset?: string | undefined;
            modelValue?: boolean[] | undefined;
            stateful?: boolean | undefined;
            multiple?: boolean | undefined;
            inset?: boolean | undefined;
            popout?: boolean | undefined;
          };
          VaAffix: {
            preset?: string | undefined;
            offsetTop?: number | undefined;
            offsetBottom?: number | undefined;
            target?:
              | Window
              | HTMLElement
              | (() => Window | HTMLElement)
              | undefined;
          };
          VaAlert: {
            title?: string | undefined;
            description?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: boolean | undefined;
            icon?: string | undefined;
            stateful?: boolean | undefined;
            center?: boolean | undefined;
            textColor?: string | undefined;
            closeText?: string | undefined;
            closeable?: boolean | undefined;
            dense?: boolean | undefined;
            outline?: boolean | undefined;
            borderColor?: string | undefined;
            border?: "" | "top" | "bottom" | "left" | "right" | undefined;
          };
          VaAppBar: {
            fixed?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            target?: string | HTMLElement | undefined;
            bottom?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
            gradient?: boolean | undefined;
            shadowOnScroll?: boolean | undefined;
            shadowColor?: string | undefined;
          };
          VaAvatar: {
            color?: string | undefined;
            preset?: string | undefined;
            size?: string | number | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            fontSize?: string | undefined;
            icon?: string | undefined;
            loading?: boolean | undefined;
            readonly textColor?: string | undefined;
            square?: boolean | undefined;
            src?: string | undefined;
            alt?: string | undefined;
          };
          VaBacktop: {
            color?: string | undefined;
            preset?: string | undefined;
            target?: string | Element | undefined;
            visibilityHeight?: number | undefined;
            speed?: number | undefined;
            verticalOffset?: string | undefined;
            horizontalOffset?: string | undefined;
            horizontalPosition?: "left" | "right" | undefined;
            verticalPosition?: "top" | "bottom" | undefined;
          };
          VaBadge: {
            text?: string | number | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            bottom?: boolean | undefined;
            left?: boolean | undefined;
            readonly textColor?: string | undefined;
            transparent?: boolean | undefined;
            overlap?: boolean | undefined;
            multiLine?: boolean | undefined;
            visibleEmpty?: boolean | undefined;
            dot?: boolean | undefined;
          };
          VaBreadcrumbs: {
            vertical?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            align?: string | undefined;
            separator?: string | undefined;
            activeColor?: string | undefined;
            separatorColor?: string | undefined;
          };
          VaBreadcrumbsItem: {
            replace?: boolean | undefined;
            label?: string | undefined;
            tag?: string | undefined;
            disabled?: boolean | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
          };
          VaButton: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            type?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            backgroundOpacity?: number | undefined;
            hoverBehavior?: "mask" | "opacity" | undefined;
            hoverOpacity?: number | undefined;
            pressedBehavior?: "mask" | "opacity" | undefined;
            pressedOpacity?: number | undefined;
            plain?: boolean | undefined;
            textOpacity?: number | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            loading?: boolean | undefined;
            textColor?: string | undefined;
            borderColor?: string | undefined;
            gradient?: boolean | undefined;
            block?: boolean | undefined;
            round?: boolean | undefined;
            iconRight?: string | undefined;
            iconColor?: string | undefined;
            pressedMaskColor?: string | undefined;
            hoverMaskColor?: string | undefined;
          };
          VaButtonDropdown: {
            readonly?: boolean | undefined;
            replace?: boolean | undefined;
            split?: boolean | undefined;
            readonly label?: string | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            type?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            modelValue?: boolean | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            backgroundOpacity?: number | undefined;
            hoverBehavior?: "mask" | "opacity" | undefined;
            hoverOpacity?: number | undefined;
            pressedBehavior?: "mask" | "opacity" | undefined;
            pressedOpacity?: number | undefined;
            plain?: boolean | undefined;
            textOpacity?: number | undefined;
            target?: MaybeHTMLElementOrSelector;
            placement?: Placement | undefined;
            offset?: number | [number, number] | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            loading?: boolean | undefined;
            textColor?: string | undefined;
            borderColor?: string | undefined;
            gradient?: boolean | undefined;
            round?: boolean | undefined;
            iconColor?: string | undefined;
            pressedMaskColor?: string | undefined;
            hoverMaskColor?: string | undefined;
            leftIcon?: boolean | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?:
              | "click"
              | "hover"
              | "dblclick"
              | "none"
              | "right-click"
              | undefined;
            keyboardNavigation?: boolean | undefined;
            openedIcon?: string | undefined;
            hideIcon?: boolean | undefined;
            disableButton?: boolean | undefined;
            disableDropdown?: boolean | undefined;
            splitTo?: string | undefined;
            splitHref?: string | undefined;
          };
          VaButtonGroup: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            type?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            backgroundOpacity?: number | undefined;
            hoverBehavior?: "mask" | "opacity" | undefined;
            hoverOpacity?: number | undefined;
            pressedBehavior?: "mask" | "opacity" | undefined;
            pressedOpacity?: number | undefined;
            plain?: boolean | undefined;
            textOpacity?: number | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            loading?: boolean | undefined;
            textColor?: string | undefined;
            borderColor?: string | undefined;
            gradient?: boolean | undefined;
            round?: boolean | undefined;
            iconRight?: string | undefined;
            iconColor?: string | undefined;
            pressedMaskColor?: string | undefined;
            hoverMaskColor?: string | undefined;
            grow?: boolean | undefined;
          };
          VaButtonToggle: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            type?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            modelValue?: string | number | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            backgroundOpacity?: number | undefined;
            hoverBehavior?: "mask" | "opacity" | undefined;
            hoverOpacity?: number | undefined;
            pressedBehavior?: "mask" | "opacity" | undefined;
            pressedOpacity?: number | undefined;
            plain?: boolean | undefined;
            textOpacity?: number | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            loading?: boolean | undefined;
            readonly options: ButtonOption[];
            textColor?: string | undefined;
            borderColor?: string | undefined;
            gradient?: boolean | undefined;
            round?: boolean | undefined;
            iconRight?: string | undefined;
            iconColor?: string | undefined;
            pressedMaskColor?: string | undefined;
            hoverMaskColor?: string | undefined;
            grow?: boolean | undefined;
            readonly activeButtonTextColor?: string | undefined;
            toggleColor?: string | undefined;
          };
          VaCard: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            disabled?: boolean | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            readonly textColor?: string | undefined;
            gradient?: boolean | undefined;
            square?: boolean | undefined;
            bordered?: boolean | undefined;
            outlined?: boolean | undefined;
            stripe?: boolean | undefined;
            stripeColor?: string | undefined;
          };
          VaCardBlock: {
            horizontal?: boolean | undefined;
          };
          VaCardActions: {
            vertical?: boolean | undefined;
            preset?: string | undefined;
            align?: string | undefined;
          };
          VaCardContent: {};
          VaCardTitle: {
            preset?: string | undefined;
            readonly textColor?: string | undefined;
          };
          VaCarousel: {
            effect?: "fade" | "transition" | undefined;
            vertical?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: number | undefined;
            stateful?: boolean | undefined;
            height?: string | undefined;
            draggable?: boolean | undefined;
            swipable?: boolean | undefined;
            swipeDistance?: number | undefined;
            swipeDirection?:
              | (
                  | "all"
                  | "horizontal"
                  | "vertical"
                  | ("" | "left" | "right" | "up" | "down")
                )
              | undefined;
            src?: string | undefined;
            alt?: string | undefined;
            readonly items: any[];
            readonly ratio?: number | undefined;
            contain?: boolean | undefined;
            autoscroll?: boolean | undefined;
            autoscrollInterval?: number | undefined;
            autoscrollPauseDuration?: number | undefined;
            infinite?: boolean | undefined;
            fadeKeyframe?: string | undefined;
            arrows?: boolean | undefined;
            indicators?: boolean | undefined;
            indicatorTrigger?: "click" | "hover" | undefined;
          };
          VaCheckbox: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?:
              | string
              | number
              | boolean
              | unknown[]
              | Record<any, unknown>
              | null
              | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            error?: boolean | undefined;
            id?: string | undefined;
            ariaLabel?: string | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: any) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            loading?: boolean | undefined;
            arrayValue?:
              | string
              | number
              | boolean
              | Record<string, any>
              | undefined;
            leftLabel?: boolean | undefined;
            trueValue?: boolean | undefined;
            falseValue?: boolean | undefined;
            indeterminate?: boolean | undefined;
            indeterminateValue?:
              | string
              | number
              | boolean
              | unknown[]
              | Record<any, unknown>
              | null
              | undefined;
            checkedIcon?: string | undefined;
            indeterminateIcon?: string | undefined;
          };
          VaChip: {
            readonly?: boolean | undefined;
            replace?: boolean | undefined;
            flat?: boolean | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            modelValue?: boolean | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            shadow?: boolean | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            closeable?: boolean | undefined;
            outline?: boolean | undefined;
            square?: boolean | undefined;
          };
          VaCollapse: {
            header?: string | undefined;
            flat?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: boolean | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            textColor?: string | undefined;
            solid?: boolean | undefined;
            colorAll?: boolean | undefined;
          };
          VaColorIndicator: {
            color?: string | undefined;
            preset?: string | undefined;
            size?: string | undefined;
            modelValue?: boolean | undefined;
            stateful?: boolean | undefined;
            square?: boolean | undefined;
          };
          VaColorInput: {
            preset?: string | undefined;
            modelValue?: string | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            indicator?: "square" | "dot" | undefined;
          };
          VaColorPalette: {
            preset?: string | undefined;
            modelValue?: string | undefined;
            stateful?: boolean | undefined;
            indicator?: "square" | "dot" | undefined;
            palette?: string[] | undefined;
          };
          VaConfig: {
            preset?: string | undefined;
            components?: Record<string, any> | undefined;
          };
          VaContent: {};
          VaCounter: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            flat?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: string | number | undefined;
            disabled?: boolean | undefined;
            max?: number | undefined;
            stateful?: boolean | undefined;
            buttons?: boolean | undefined;
            width?: string | number | undefined;
            messages?: string | string[] | undefined;
            textColor?: string | undefined;
            outline?: boolean | undefined;
            bordered?: boolean | undefined;
            min?: number | undefined;
            step?: number | undefined;
            manualInput?: boolean | undefined;
            increaseIcon?: string | undefined;
            decreaseIcon?: string | undefined;
            rounded?: boolean | undefined;
            margins?: string | number | undefined;
          };
          VaDataTable: {
            table?: boolean | undefined;
            filter?: string | undefined;
            horizontal?: boolean | undefined;
            preset?: string | undefined;
            readonly modelValue?: any[] | undefined;
            disabled?: boolean | undefined;
            readonly height?: string | number | undefined;
            loading?: boolean | undefined;
            trackBy?:
              | string
              | number
              | ((item: any[] | Record<string, any>) => string | number)
              | undefined;
            items?: DataTableItem[] | undefined;
            bench?: number | undefined;
            itemSize?: string | number | undefined;
            wrapperSize?: string | number | undefined;
            columns?: DataTableColumnSource[] | undefined;
            itemsTrackBy?: string | ((item: DataTableItem) => any) | undefined;
            readonly sortingOrder?: DataTableSortingOrder | undefined;
            readonly sortBy?: string | undefined;
            sortingOptions?: DataTableSortingOptions | undefined;
            readonly filterMethod?: DataTableFilterMethod | undefined;
            hoverable?: boolean | undefined;
            clickable?: boolean | undefined;
            animated?: boolean | undefined;
            selectable?: boolean | undefined;
            selectMode?: DataTableSelectMode | undefined;
            selectedColor?: string | undefined;
            readonly perPage?: number | undefined;
            readonly currentPage?: number | undefined;
            loadingColor?: string | undefined;
            noDataHtml?: string | undefined;
            noDataFilteredHtml?: string | undefined;
            hideDefaultHeader?: boolean | undefined;
            footerClone?: boolean | undefined;
            allowFooterSorting?: boolean | undefined;
            striped?: boolean | undefined;
            stickyHeader?: boolean | undefined;
            stickyFooter?: boolean | undefined;
            readonly rowBind?: DataTableRowBind | undefined;
            readonly cellBind?: DataTableCellBind | undefined;
            virtualScroller?: boolean | undefined;
            virtualTrackBy?: string | number | undefined;
            scrollTopMargin?: number | undefined;
            scrollBottomMargin?: number | undefined;
          };
          VaDateInput: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            view?: DatePickerView | undefined;
            color?: string | undefined;
            type?: DatePickerType | undefined;
            preset?: string | undefined;
            mode?: DatePickerMode | undefined;
            readonly modelValue?: DateInputModelValue;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            clearable?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            target?: MaybeHTMLElementOrSelector;
            error?: boolean | undefined;
            placement?: Placement | undefined;
            offset?: DropdownOffsetProp | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            counterValue?: number | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: DateInputModelValue) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            background?: string | undefined;
            textColor?: string | undefined;
            outline?: boolean | undefined;
            bordered?: boolean | undefined;
            leftIcon?: boolean | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?:
              | "click"
              | "hover"
              | "dblclick"
              | "none"
              | "right-click"
              | undefined;
            keyboardNavigation?: boolean | undefined;
            maxLength?: number | undefined;
            focused?: boolean | undefined;
            requiredMark?: boolean | undefined;
            clearableIcon?: string | undefined;
            clearValue?: DateInputModelValue;
            manualInput?: boolean | undefined;
            highlightWeekend?: boolean | undefined;
            highlightToday?: boolean | undefined;
            monthNames?: string[] | undefined;
            weekdayNames?: string[] | undefined;
            firstWeekday?: "Monday" | "Sunday" | undefined;
            hideWeekDays?: boolean | undefined;
            showOtherMonths?: boolean | undefined;
            allowedDays?: ((date: Date) => boolean) | undefined;
            weekends?: ((date: Date) => boolean) | undefined;
            allowedMonths?: ((date: Date) => boolean) | undefined;
            allowedYears?: ((date: Date) => boolean) | undefined;
            startYear?: number | undefined;
            endYear?: number | undefined;
            weekendsColor?: string | undefined;
            resetOnClose?: boolean | undefined;
            isOpen?: boolean | undefined;
            readonly format?:
              | ((date: DateInputModelValue) => string)
              | undefined;
            formatDate?: ((date: Date) => string) | undefined;
            readonly parse?: ((input: string) => DateInputValue) | undefined;
            readonly parseDate?: ((input: string) => Date) | undefined;
            readonly parseValue?:
              | ((date: DateInputModelValue) => DatePickerModelValue)
              | undefined;
            delimiter?: string | undefined;
            rangeDelimiter?: string | undefined;
          };
          VaDatePicker: {
            readonly?: boolean | undefined;
            readonly view?: DatePickerView | undefined;
            color?: string | undefined;
            type?: DatePickerType | undefined;
            preset?: string | undefined;
            mode?: DatePickerMode | undefined;
            readonly modelValue?: DatePickerModelValue;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            textColor?: string | undefined;
            highlightWeekend?: boolean | undefined;
            highlightToday?: boolean | undefined;
            monthNames?: string[] | undefined;
            weekdayNames?: string[] | undefined;
            firstWeekday?: "Monday" | "Sunday" | undefined;
            hideWeekDays?: boolean | undefined;
            showOtherMonths?: boolean | undefined;
            allowedDays?: ((date: Date) => boolean) | undefined;
            weekends?: ((date: Date) => boolean) | undefined;
            allowedMonths?: ((date: Date) => boolean) | undefined;
            allowedYears?: ((date: Date) => boolean) | undefined;
            startYear?: number | undefined;
            endYear?: number | undefined;
            weekendsColor?: string | undefined;
          };
          VaDivider: {
            vertical?: boolean | undefined;
            preset?: string | undefined;
            orientation?: "left" | "center" | "right" | undefined;
            inset?: boolean | undefined;
            dashed?: boolean | undefined;
          };
          VaDropdown: {
            readonly?: boolean | undefined;
            preset?: string | undefined;
            readonly modelValue?: boolean | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            target?: MaybeHTMLElementOrSelector;
            placement?: Placement | undefined;
            offset?: DropdownOffsetProp | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?:
              | "click"
              | "hover"
              | "dblclick"
              | "none"
              | "right-click"
              | undefined;
            keyboardNavigation?: boolean | undefined;
          };
          VaDropdownContent: {
            background?: string | undefined;
            readonly textColor?: string | undefined;
            noPadding?: boolean | undefined;
          };
          VaFileUpload: {
            color?: string | undefined;
            type?: "list" | "single" | "gallery" | undefined;
            preset?: string | undefined;
            modelValue?: VaFile | VaFile[] | undefined;
            disabled?: boolean | undefined;
            undo?: boolean | undefined;
            dropzone?: boolean | undefined;
            undoDuration?: number | undefined;
            undoButtonText?: string | undefined;
            deletedFileMessage?: string | undefined;
            fileTypes?: string | undefined;
            hideFileList?: boolean | undefined;
            dropZoneText?: string | undefined;
            uploadButtonText?: string | undefined;
          };
          VaForm: {
            tag?: string | undefined;
            preset?: string | undefined;
            autofocus?: boolean | undefined;
          };
          VaHover: {
            preset?: string | undefined;
            modelValue?: boolean | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
          };
          VaIcon: {
            name?: string | undefined;
            readonly tag?: string | undefined;
            readonly component?: any;
            readonly color?: string | undefined;
            readonly rotation?: string | number | undefined;
            readonly spin?: string | boolean | undefined;
            flip?: "off" | "horizontal" | "vertical" | "both" | undefined;
            preset?: string | undefined;
            size?: string | number | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
          };
          VaImage: {
            preset?: string | undefined;
            draggable?: boolean | undefined;
            readonly src: string;
            alt?: string | undefined;
            ratio?: number | undefined;
            contain?: boolean | undefined;
          };
          VaInfiniteScroll: {
            reverse?: boolean | undefined;
            tag?: string | undefined;
            preset?: string | undefined;
            disabled?: boolean | undefined;
            readonly load: Function;
            offset?: number | undefined;
            scrollTarget?: string | HTMLElement | undefined;
            debounce?: number | undefined;
          };
          VaInnerLoading: {
            readonly color?: string | undefined;
            preset?: string | undefined;
            size?: number | undefined;
            icon?: string | undefined;
            loading?: boolean | undefined;
          };
          VaInput: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            mask?: string | Record<string, number[]> | undefined;
            readonly pattern?: string | undefined;
            color?: string | undefined;
            type?:
              | (
                  | "textarea"
                  | "text"
                  | "password"
                  | (string & Record<never, never>)
                )
              | undefined;
            preset?: string | undefined;
            tabindex?: number | undefined;
            modelValue?: string | number | undefined;
            disabled?: boolean | undefined;
            clearable?: boolean | undefined;
            success?: boolean | undefined;
            error?: boolean | undefined;
            ariaLabel?: string | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: string) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            loading?: boolean | undefined;
            outline?: boolean | undefined;
            bordered?: boolean | undefined;
            maxLength?: number | undefined;
            requiredMark?: boolean | undefined;
            placeholder?: string | undefined;
            autosize?: boolean | undefined;
            minRows?: number | undefined;
            maxRows?: number | undefined;
            inputClass?: string | undefined;
            inputmode?: string | undefined;
            counter?: boolean | undefined;
            returnRaw?: boolean | undefined;
            clearableIcon?: string | undefined;
            clearValue?: string | undefined;
          };
          VaList: {
            preset?: string | undefined;
            fit?: boolean | undefined;
          };
          VaListItem: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            preset?: string | undefined;
            disabled?: boolean | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
          };
          VaListItemLabel: {
            caption?: boolean | undefined;
            preset?: string | undefined;
            lines?: number | undefined;
          };
          VaListItemSection: {
            preset?: string | undefined;
            icon?: boolean | undefined;
            avatar?: boolean | undefined;
          };
          VaListLabel: {
            color?: string | undefined;
            preset?: string | undefined;
          };
          VaListSeparator: {
            preset?: string | undefined;
            fit?: boolean | undefined;
            spaced?: boolean | undefined;
          };
          VaMessageList: {
            readonly color?: string | undefined;
            modelValue?: string | string[] | undefined;
            limit?: number | undefined;
            hasError?: boolean | undefined;
          };
          VaModal: {
            title?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            modelValue?: boolean | undefined;
            stateful?: boolean | undefined;
            blur?: boolean | undefined;
            message?: string | undefined;
            maxWidth?: string | undefined;
            backgroundColor?: string | undefined;
            noPadding?: boolean | undefined;
            attachElement?: string | undefined;
            disableAttachment?: boolean | undefined;
            okText?: string | undefined;
            cancelText?: string | undefined;
            hideDefaultActions?: boolean | undefined;
            fullscreen?: boolean | undefined;
            mobileFullscreen?: boolean | undefined;
            noDismiss?: boolean | undefined;
            noOutsideDismiss?: boolean | undefined;
            noEscDismiss?: boolean | undefined;
            maxHeight?: string | undefined;
            readonly anchorClass?: string | undefined;
            fixedLayout?: boolean | undefined;
            withoutTransitions?: boolean | undefined;
            overlay?: boolean | undefined;
            overlayOpacity?: string | number | undefined;
            zIndex?: string | number | undefined;
            readonly beforeClose?: ((hide: () => void) => any) | undefined;
          };
          VaNavbar: {
            fixed?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            bottom?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
            readonly textColor?: string | undefined;
            shape?: boolean | undefined;
          };
          VaNavbarItem: {};
          VaOptionList: {
            readonly?: boolean | undefined;
            name?: string | undefined;
            color?: string | undefined;
            type?: "switch" | "checkbox" | "radio" | undefined;
            preset?: string | undefined;
            readonly modelValue?:
              | (SelectableOption | SelectableOption[] | null)
              | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            error?: boolean | undefined;
            readonly defaultValue?:
              | (SelectableOption | SelectableOption[] | null)
              | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: any) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            leftLabel?: boolean | undefined;
            options?: SelectableOption[] | undefined;
            textBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            valueBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            trackBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            disabledBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            groupBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
          };
          VaPagination: {
            input?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            modelValue?: number | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            borderColor?: string | undefined;
            rounded?: boolean | undefined;
            visiblePages?: number | undefined;
            pages?: number | undefined;
            boundaryLinks?: boolean | undefined;
            boundaryNumbers?: boolean | undefined;
            directionLinks?: boolean | undefined;
            hideOnSinglePage?: boolean | undefined;
            total?: number | undefined;
            pageSize?: number | undefined;
            boundaryIconLeft?: string | undefined;
            boundaryIconRight?: string | undefined;
            directionIconLeft?: string | undefined;
            directionIconRight?: string | undefined;
            gapped?: boolean | undefined;
            activePageColor?: string | undefined;
            buttonsPreset?: string | undefined;
          };
          VaParallax: {
            preset?: string | undefined;
            readonly target?: string | HTMLElement | undefined;
            height?: number | undefined;
            src?: string | undefined;
            alt?: string | undefined;
            speed?: number | undefined;
            reversed?: boolean | undefined;
          };
          VaPopover: {
            readonly?: boolean | undefined;
            title?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: boolean | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            target?: MaybeHTMLElementOrSelector;
            message?: string | undefined;
            placement?: Placement | undefined;
            offset?: number | [number, number] | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            readonly textColor?: string | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?: string | undefined;
            keyboardNavigation?: boolean | undefined;
            autoHide?: boolean | undefined;
          };
          VaProgressBar: {
            reverse?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            size?: number | "small" | "medium" | "large" | undefined;
            modelValue?: number | undefined;
            indeterminate?: boolean | undefined;
            rounded?: boolean | undefined;
            buffer?: number | undefined;
            contentInside?: boolean | undefined;
            showPercent?: boolean | undefined;
          };
          VaProgressCircle: {
            color?: string | undefined;
            preset?: string | undefined;
            size?: string | number | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            modelValue?: number | undefined;
            indeterminate?: boolean | undefined;
            thickness?: number | undefined;
          };
          VaRadio: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            option?: any;
            name?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            tabindex?: number | undefined;
            modelValue?:
              | string
              | number
              | boolean
              | unknown[]
              | Record<any, unknown>
              | null
              | undefined;
            disabled?: boolean | undefined;
            leftLabel?: boolean | undefined;
          };
          VaRating: {
            readonly?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            size?: string | number | undefined;
            sizesConfig?: Record<string, any> | undefined;
            fontSizesConfig?: Record<string, any> | undefined;
            tabindex?: number | undefined;
            hover?: boolean | undefined;
            modelValue?: number | undefined;
            icon?: string | undefined;
            halfIcon?: string | undefined;
            emptyIcon?: string | undefined;
            halves?: boolean | undefined;
            disabled?: boolean | undefined;
            unselectedColor?: string | undefined;
            itemNumber?: number | undefined;
            numbers?: boolean | undefined;
            max?: number | undefined;
            texts?: string[] | undefined;
            clearable?: boolean | undefined;
            stateful?: boolean | undefined;
          };
          VaSelect: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            tabindex?: number | undefined;
            modelValue?: SelectableOption | SelectableOption[] | undefined;
            disabled?: boolean | undefined;
            clearable?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            target?: MaybeHTMLElementOrSelector;
            error?: boolean | undefined;
            width?: string | undefined;
            placement?: Placement | undefined;
            offset?: DropdownOffsetProp | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: SelectableOption) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            loading?: boolean | undefined;
            options?: SelectableOption[] | undefined;
            textBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            valueBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            trackBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            disabledBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            groupBy?:
              | (string | ((option: SelectableOption) => unknown))
              | undefined;
            outline?: boolean | undefined;
            bordered?: boolean | undefined;
            separator?: string | undefined;
            multiple?: boolean | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?:
              | "click"
              | "hover"
              | "dblclick"
              | "none"
              | "right-click"
              | undefined;
            keyboardNavigation?: boolean | undefined;
            requiredMark?: boolean | undefined;
            placeholder?: string | undefined;
            clearableIcon?: string | undefined;
            clearValue?: string | undefined;
            virtualScroller?: boolean | undefined;
            maxHeight?: string | undefined;
            noOptionsText?: string | undefined;
            allowCreate?: boolean | "unique" | undefined;
            searchable?: boolean | undefined;
            hideSelected?: boolean | undefined;
            dropdownIcon?: string | SelectDropdownIcon | undefined;
            searchPlaceholderText?: string | undefined;
            maxSelections?: string | number | undefined;
          };
          VaSeparator: {};
          VaSidebar: {
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: boolean | undefined;
            hoverOpacity?: number | undefined;
            width?: string | undefined;
            position?: "left" | "right" | undefined;
            readonly textColor?: string | undefined;
            borderColor?: string | undefined;
            gradient?: boolean | undefined;
            activeColor?: string | undefined;
            hoverable?: boolean | undefined;
            animated?: boolean | undefined;
            hoverColor?: string | undefined;
            minimized?: boolean | undefined;
            minimizedWidth?: string | undefined;
          };
          VaSidebarItem: {
            replace?: boolean | undefined;
            tag?: string | undefined;
            preset?: string | undefined;
            disabled?: boolean | undefined;
            hoverOpacity?: number | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            textColor?: string | undefined;
            borderColor?: string | undefined;
            activeColor?: string | undefined;
            active?: boolean | undefined;
            hoverColor?: string | undefined;
          };
          VaSidebarItemContent: {};
          VaSidebarItemTitle: {};
          VaSlider: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            vertical?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: number | number[] | undefined;
            disabled?: boolean | undefined;
            max?: number | undefined;
            min?: number | undefined;
            step?: number | undefined;
            range?: boolean | undefined;
            readonly trackLabel?:
              | string
              | ((val: number, order?: number | undefined) => string)
              | undefined;
            trackColor?: string | undefined;
            labelColor?: string | undefined;
            trackLabelVisible?: boolean | undefined;
            invertLabel?: boolean | undefined;
            pins?: boolean | undefined;
            iconPrepend?: string | undefined;
            iconAppend?: string | undefined;
            showTrack?: boolean | undefined;
          };
          VaSpacer: {};
          VaSplit: {
            vertical?: boolean | undefined;
            preset?: string | undefined;
            modelValue?: number | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            maximization?: boolean | undefined;
            maximizeStart?: boolean | undefined;
            limits?: [SplitLimit, SplitLimit] | undefined;
            snapping?: SnappingMark[] | undefined;
            snappingRange?: string | number | undefined;
          };
          VaSwitch: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            size?: "small" | "medium" | "large" | undefined;
            modelValue?:
              | string
              | number
              | boolean
              | unknown[]
              | Record<string, unknown>
              | null
              | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            error?: boolean | undefined;
            id?: string | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: any) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            loading?: boolean | undefined;
            arrayValue?:
              | string
              | number
              | boolean
              | Record<string, any>
              | undefined;
            leftLabel?: boolean | undefined;
            trueValue?: boolean | undefined;
            falseValue?: boolean | undefined;
            indeterminate?: boolean | undefined;
            indeterminateValue?: null | undefined;
            trueLabel?: string | undefined;
            falseLabel?: string | undefined;
            trueInnerLabel?: string | undefined;
            falseInnerLabel?: string | undefined;
            offColor?: string | undefined;
          };
          VaTabs: {
            vertical?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: string | number | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            left?: boolean | undefined;
            center?: boolean | undefined;
            right?: boolean | undefined;
            grow?: boolean | undefined;
            hidePagination?: boolean | undefined;
            hideSlider?: boolean | undefined;
            prevIcon?: string | undefined;
            nextIcon?: string | undefined;
          };
          VaTab: {
            replace?: boolean | undefined;
            label?: string | undefined;
            readonly name?: string | number | undefined;
            tag?: string | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            target?: string | undefined;
            href?: string | undefined;
            append?: boolean | undefined;
            to?: string | Record<string, any> | undefined;
            exact?: boolean | undefined;
            activeClass?: string | undefined;
            exactActiveClass?: string | undefined;
            selected?: boolean | undefined;
          };
          VaTimeInput: {
            readonly?: boolean | undefined;
            label?: string | undefined;
            view?: "hours" | "minutes" | "seconds" | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            modelValue?: Date | undefined;
            icon?: string | undefined;
            disabled?: boolean | undefined;
            clearable?: boolean | undefined;
            stateful?: boolean | undefined;
            success?: boolean | undefined;
            target?: MaybeHTMLElementOrSelector;
            error?: boolean | undefined;
            placement?: Placement | undefined;
            offset?: DropdownOffsetProp | undefined;
            keepAnchorWidth?: boolean | undefined;
            autoPlacement?: boolean | undefined;
            stickToEdges?: boolean | undefined;
            counterValue?: number | undefined;
            errorMessages?: string | string[] | undefined;
            errorCount?: string | number | undefined;
            rules?: ((v: Date) => any)[] | undefined;
            messages?: string | string[] | undefined;
            immediateValidation?: boolean | undefined;
            background?: string | undefined;
            outline?: boolean | undefined;
            bordered?: boolean | undefined;
            leftIcon?: boolean | undefined;
            anchorSelector?: string | undefined;
            innerAnchorSelector?: string | undefined;
            preventOverflow?: boolean | undefined;
            isContentHoverable?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            closeOnClickOutside?: boolean | undefined;
            closeOnAnchorClick?: boolean | undefined;
            hoverOverTimeout?: number | undefined;
            hoverOutTimeout?: number | undefined;
            cursor?: boolean | undefined;
            trigger?:
              | "click"
              | "hover"
              | "dblclick"
              | "none"
              | "right-click"
              | undefined;
            keyboardNavigation?: boolean | undefined;
            maxLength?: number | undefined;
            focused?: boolean | undefined;
            requiredMark?: boolean | undefined;
            clearableIcon?: string | undefined;
            clearValue?: Date | undefined;
            manualInput?: boolean | undefined;
            isOpen?: boolean | undefined;
            readonly format?: ((date?: Date | undefined) => string) | undefined;
            readonly parse?: ((input: string) => Date) | undefined;
            cellHeight?: number | undefined;
            ampm?: boolean | undefined;
            hidePeriodSwitch?: boolean | undefined;
            periodUpdatesModelValue?: boolean | undefined;
            hoursFilter?: ((h: number) => boolean) | undefined;
            minutesFilter?: ((h: number) => boolean) | undefined;
            secondsFilter?: ((h: number) => boolean) | undefined;
            framed?: boolean | undefined;
            visibleCellsCount?: number | undefined;
          };
          VaTimeline: {};
          VaTimelineItem: {
            vertical?: boolean | undefined;
            color?: string | undefined;
            preset?: string | undefined;
            active?: boolean | undefined;
            activePrevious?: boolean | undefined;
            activeNext?: boolean | undefined;
            isFirst?: boolean | undefined;
            isLast?: boolean | undefined;
            inverted?: boolean | undefined;
          };
          VaTimePicker: {
            readonly?: boolean | undefined;
            view?: "hours" | "minutes" | "seconds" | undefined;
            preset?: string | undefined;
            readonly modelValue?: Date | undefined;
            disabled?: boolean | undefined;
            stateful?: boolean | undefined;
            cellHeight?: number | undefined;
            ampm?: boolean | undefined;
            hidePeriodSwitch?: boolean | undefined;
            periodUpdatesModelValue?: boolean | undefined;
            readonly hoursFilter?: ((h: number) => boolean) | undefined;
            readonly minutesFilter?: ((h: number) => boolean) | undefined;
            readonly secondsFilter?: ((h: number) => boolean) | undefined;
            framed?: boolean | undefined;
            visibleCellsCount?: number | undefined;
          };
          VaTreeView: {
            filter?: string | undefined;
            color?: string | undefined;
            stateful?: boolean | undefined;
            textBy?: TreeViewPropKey | undefined;
            valueBy?: TreeViewPropKey | undefined;
            trackBy?: TreeViewPropKey | undefined;
            disabledBy?: TreeViewPropKey | undefined;
            expanded?: (string | number | TreeNode)[] | undefined;
            checked?: (string | number | TreeNode)[] | undefined;
            filterMethod?: TreeViewFilterMethod | undefined;
            selectable?: boolean | undefined;
            iconBy?: TreeViewPropKey | undefined;
            nodes?: TreeNode[] | undefined;
            selectionType?: string | undefined;
            expandedBy?: TreeViewPropKey | undefined;
            checkedBy?: TreeViewPropKey | undefined;
            expandAll?: boolean | undefined;
          };
          VaScrollContainer: {
            horizontal?: boolean | undefined;
            vertical?: boolean | undefined;
            color?: string | undefined;
            size?: "default" | "none" | "thin" | undefined;
          };
          VaVirtualScroller: {
            table?: boolean | undefined;
            horizontal?: boolean | undefined;
            disabled?: boolean | undefined;
            trackBy?:
              | string
              | number
              | ((item: any[] | Record<string, any>) => string | number)
              | undefined;
            items?: unknown[] | undefined;
            bench?: number | undefined;
            itemSize?: string | number | undefined;
            wrapperSize?: string | number | undefined;
          };
        } & {
          all: Props;
          presets: Presets;
        }
      >
    | undefined;
  breakpoint?:
    | {
        enabled?: boolean | undefined;
        bodyClass?: boolean | undefined;
        thresholds?:
          | {
              xs?: number | undefined;
              sm?: number | undefined;
              md?: number | undefined;
              lg?: number | undefined;
              xl?: number | undefined;
            }
          | undefined;
      }
    | undefined;
  i18n?:
    | {
        search?: string | undefined;
        noOptions?: string | undefined;
        ok?: string | undefined;
        cancel?: string | undefined;
        uploadFile?: string | undefined;
        undo?: string | undefined;
        dropzone?: string | undefined;
        fileDeleted?: string | undefined;
        closeAlert?: string | undefined;
        backToTop?: string | undefined;
        toggleDropdown?: string | undefined;
        carousel?: string | undefined;
        goPreviousSlide?: string | undefined;
        goNextSlide?: string | undefined;
        goSlide?: string | undefined;
        slideOf?: string | undefined;
        close?: string | undefined;
        openColorPicker?: string | undefined;
        colorSelection?: string | undefined;
        colorName?: string | undefined;
        decreaseCounter?: string | undefined;
        increaseCounter?: string | undefined;
        selectAllRows?: string | undefined;
        sortColumnBy?: string | undefined;
        selectRowByIndex?: string | undefined;
        resetDate?: string | undefined;
        nextPeriod?: string | undefined;
        switchView?: string | undefined;
        previousPeriod?: string | undefined;
        removeFile?: string | undefined;
        reset?: string | undefined;
        pagination?: string | undefined;
        goToTheFirstPage?: string | undefined;
        goToPreviousPage?: string | undefined;
        goToSpecificPage?: string | undefined;
        goToSpecificPageInput?: string | undefined;
        goNextPage?: string | undefined;
        goLastPage?: string | undefined;
        currentRating?: string | undefined;
        voteRating?: string | undefined;
        optionsFilter?: string | undefined;
        splitPanels?: string | undefined;
        movePaginationLeft?: string | undefined;
        movePaginationRight?: string | undefined;
        resetTime?: string | undefined;
        closeToast?: string | undefined;
        selectedOption?: string | undefined;
        noSelectedOption?: string | undefined;
        breadcrumbs?: string | undefined;
        counterValue?: string | undefined;
        selectedDate?: string | undefined;
        selectedTime?: string | undefined;
        progressState?: string | undefined;
        color?: string | undefined;
      }
    | undefined;
};
export type VuesticConfig = {
  config?: VuesticConfigConfig;
};
