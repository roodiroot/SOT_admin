import { TranslationMessages } from "ra-core";

const ruMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Все фильтры",
      add: "Добавить",
      back: "Назад",
      bulk_actions: "1 item selected |||| %{smart_count} items selected",
      cancel: "Отмена",
      clear_array_input: "Clear the list",
      clear_input_value: "Clear value",
      clone: "Clone",
      confirm: "Подтвердить",
      create: "Создать",
      create_item: "Создать %{item}",
      delete: "Удалить",
      edit: "Изменить",
      export: "Выгрузить",
      list: "Список",
      refresh: "Обновить",
      remove_filter: "Удалить фильтр",
      remove_all_filters: "Удалить фильтры",
      remove: "Remove",
      save: "Сохранить",
      search: "Поиск",
      select_all: "Выбрать все",
      select_row: "Выбрать ряд",
      show: "Просмотр",
      sort: "Sort",
      undo: "Отменить",
      unselect: "Unselect",
      expand: "Expand",
      close: "Закрыть",
      open_menu: "Открыть меню",
      close_menu: "Закрыть меню",
      update: "Обновить",
      move_up: "Move up",
      move_down: "Move down",
      open: "Открыть",
      toggle_theme: "Toggle light/dark mode",
      select_columns: "Columns",
      update_application: "Reload Application",
    },
    boolean: {
      true: "Да",
      false: "Нет",
      null: " ",
    },
    page: {
      create: "Создать %{name}",
      dashboard: "Дашборд",
      edit: "%{name} %{recordRepresentation}",
      error: "Что-то пошло не так",
      list: "%{name}",
      loading: "Загрузка",
      not_found: "Не найдено",
      show: "%{name} %{recordRepresentation}",
      empty: "%{name} пока нет.",
      invite: "Создадим первый?",
    },
    input: {
      file: {
        upload_several:
          "Перетащите несколько файлов для загрузки или нажмите, чтобы выбрать.",
        upload_single:
          "Перетащите файл для загрузки или щелкните, чтобы выбрать.",
      },
      image: {
        upload_several:
          "Перетащите несколько изображений для загрузки или нажмите, чтобы выбрать.",
        upload_single:
          "Перетащите изображение для загрузки или щелкните, чтобы выбрать его.",
      },
      references: {
        all_missing: "Не удалось найти справочные данные.",
        many_missing:
          "По крайней мере одна из связанных ссылок больше не доступна.",
        single_missing: "Соответствующая ссылка больше не доступна.",
      },
      password: {
        toggle_visible: "Hide password",
        toggle_hidden: "Show password",
      },
    },
    message: {
      about: "About",
      are_you_sure: "Are you sure?",
      auth_error:
        "An error occurred while validating the authentication token.",
      bulk_delete_content:
        "Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?",
      bulk_delete_title: "Удалить %{name} |||| Удалить %{smart_count} %{name}",
      bulk_update_content:
        "Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?",
      bulk_update_title: "Update %{name} |||| Update %{smart_count} %{name}",
      clear_array_input: "Are you sure you want to clear the whole list?",
      delete_content: "Вы действительно хотите удалить элемент?",
      delete_title: "Удалить %{name} #%{id}",
      details: "Details",
      error: "A client error occurred and your request couldn't be completed.",

      invalid_form:
        "Форма недействительна. Пожалуйста, проверьте наличие ошибок.",
      loading: "Пожалуйста подождите",
      no: "Нет",
      not_found:
        "Либо вы ввели неправильный URL-адрес, либо перешли по неверной ссылке.",
      yes: "Yes",
      unsaved_changes:
        "Some of your changes weren't saved. Are you sure you want to ignore them?",
    },
    navigation: {
      no_results: "Результатов не найдено",
      no_more_results:
        "The page number %{page} is out of boundaries. Try the previous page.",
      page_out_of_boundaries: "Page number %{page} out of boundaries",
      page_out_from_end: "Cannot go after last page",
      page_out_from_begin: "Cannot go before page 1",
      page_range_info: "%{offsetBegin}-%{offsetEnd} of %{total}",
      partial_page_range_info:
        "%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}",
      current_page: "Page %{page}",
      page: "Go to page %{page}",
      first: "Go to first page",
      last: "Go to last page",
      next: "Go to next page",
      previous: "Go to previous page",
      page_rows_per_page: "Rows per page:",
      skip_nav: "Skip to content",
    },
    sort: {
      sort_by: "Sort by %{field} %{order}",
      ASC: "ascending",
      DESC: "descending",
    },
    auth: {
      auth_check_error: "Пожалуйста, войдите, чтобы продолжить",
      user_menu: "Профиль",
      username: "Имя пользователя",
      password: "Пароль",
      sign_in: "Войти",
      sign_in_error: "Ошибка аутентификации, повторите попытку.",
      logout: "Выйти",
    },
    notification: {
      updated: "Элемент обновлен |||| %{smart_count} elements updated",
      created: "Элемент создан",
      deleted: "Элемент удален |||| %{smart_count} elements deleted",
      bad_item: "Incorrect element",
      item_doesnt_exist: "Element does not exist",
      http_error: "Server communication error",
      data_provider_error: "dataProvider error. Check the console for details.",
      i18n_error: "Cannot load the translations for the specified language",
      canceled: "Action cancelled",
      logged_out: "Your session has ended, please reconnect.",
      not_authorized: "You're not authorized to access this resource.",
      application_update_available: "A new version is available.",
    },
    validation: {
      required: "Required",
      minLength: "Must be %{min} characters at least",
      maxLength: "Must be %{max} characters or less",
      minValue: "Must be at least %{min}",
      maxValue: "Must be %{max} or less",
      number: "Must be a number",
      email: "Must be a valid email",
      oneOf: "Must be one of: %{options}",
      regex: "Must match a specific format (regexp): %{pattern}",
      unique: "Must be unique",
    },
    saved_queries: {
      label: "Сохраненные фильтры",
      query_name: "Query name",
      new_label: "Сохранить текущий фильтр...",
      new_dialog_title: "Сохранить текущий фильтр как",
      remove_label: "Remove saved query",
      remove_label_with_name: 'Remove query "%{name}"',
      remove_dialog_title: "Remove saved query?",
      remove_message:
        "Are you sure you want to remove that item from your list of saved queries?",
      help: "Filter the list and save this query for later",
    },
    configurable: {
      customize: "Customize",
      configureMode: "Configure this page",
      inspector: {
        title: "Inspector",
        content: "Hover the application UI elements to configure them",
        reset: "Reset Settings",
        hideAll: "Hide All",
        showAll: "Show All",
      },
      Datagrid: {
        title: "Datagrid",
        unlabeled: "Unlabeled column #%{column}",
      },
      SimpleForm: {
        title: "Form",
        unlabeled: "Unlabeled input #%{input}",
      },
      SimpleList: {
        title: "List",
        primaryText: "Primary text",
        secondaryText: "Secondary text",
        tertiaryText: "Tertiary text",
      },
    },
  },
};

export default ruMessages;
