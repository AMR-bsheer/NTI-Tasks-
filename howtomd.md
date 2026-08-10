آه، تقصد تتعلم **Markdown (MD)** من الصفر بحيث تعرف تكتب ملفات `.md` بنفسك، خصوصًا لو هتستخدمها في Obsidian وGitHub. ودي من أسهل اللغات اللي ممكن تتعلمها.

## 1. يعني إيه Markdown؟

Markdown هي لغة كتابة بسيطة بتخليك تعمل **تنسيق للنص باستخدام رموز عادية**.

مثلاً:

```md
# عنوان كبير

## عنوان أصغر

ده نص عادي.

**ده Bold**

*ده Italic*
```

وتظهر بالشكل:

# عنوان كبير

## عنوان أصغر

ده نص عادي.

**ده Bold**

*ده Italic*

---

# أهم حاجات تتعلمها

## 2. العناوين `Headings`

بتستخدم `#`:

```md
# Heading 1

## Heading 2

### Heading 3

#### Heading 4
```

كل ما تزود `#` العنوان يصغر.

> أكبر حاجة هي `#` وأقصى حاجة أساسية `######`.

---

## 3. Bold و Italic

### Bold

```md
**Hello**
```

→ **Hello**

### Italic

```md
*Hello*
```

→ *Hello*

### الاتنين مع بعض

```md
***Hello***
```

→ ***Hello***

---

## 4. القوائم

### Unordered List

```md
- HTML
- CSS
- JavaScript
- React
```

تظهر:

* HTML
* CSS
* JavaScript
* React

### Ordered List

```md
1. HTML
2. CSS
3. JavaScript
```

تظهر:

1. HTML
2. CSS
3. JavaScript

---

## 5. Code

وده مهم جدًا ليك كمبرمج.

### Inline Code

لو عايز تكتب كود وسط الكلام:

```md
استخدم `console.log()` لطباعة البيانات.
```

→ استخدم `console.log()` لطباعة البيانات.

### Code Block

لو عندك كود كامل:

````md
```js
const name = "Amr";

console.log(name);
```
````

هيظهر:

```js
const name = "Amr";

console.log(name);
```

لاحظ:

````md
```js
````

`js` بتحدد إن الكود JavaScript.

ممكن تستخدم:

````md
```html
```css
```js
```python
```bash
````

وده اسمه **Syntax Highlighting**.

---

# 6. Links

```md
[Google](https://google.com)
```

تظهر كـ:

[Google](https://google.com)

الصيغة:

```md
[النص الذي سيظهر](الرابط)
```

---

# 7. Images

```md
![صورة](image.png)
```

الصيغة:

```md
![وصف الصورة](مسار الصورة)
```

---

# 8. Quotes

استخدم `>`:

```md
> This is an important note.
```

تظهر:

> This is an important note.

ممكن تعمل أكتر من سطر:

```md
> First line
> Second line
> Third line
```

---

# 9. Horizontal Line

```md
---
```

تعمل خط فاصل:

---

# 10. Tables

مفيدة جدًا في الـ notes:

```md
| Method | Description |
|---|---|
| `stopPropagation()` | Stops event propagation |
| `preventDefault()` | Prevents default behavior |
```

تظهر:

| Method              | Description               |
| ------------------- | ------------------------- |
| `stopPropagation()` | Stops event propagation   |
| `preventDefault()`  | Prevents default behavior |

---

# 11. Checklists

مهمة جدًا في Obsidian:

```md
- [ ] Learn HTML
- [ ] Learn CSS
- [x] Learn JavaScript
```

تظهر:

* [ ] Learn HTML
* [ ] Learn CSS
* [x] Learn JavaScript

`[ ]` = لم يتم

`[x]` = تم

---

# 12. Escaping

لو عايز تكتب رمز Markdown نفسه من غير ما يتفسر، استخدم `\`.

مثلاً:

```md
\# مش Heading
```

هيظهر:

# مش Heading

---

# 13. أهم حاجة في Obsidian: الروابط بين الملفات

بما إنك بتستخدم Obsidian، دي مهمة جدًا.

```md
[[JavaScript]]
```

ده يعمل Link لملف اسمه:

```text
JavaScript.md
```

ولو عايز تعمل Link لجزء معين:

```md
[[JavaScript#Events]]
```

ولو عايز تغير النص الظاهر:

```md
[[JavaScript|JavaScript Notes]]
```

---

# 14. Callouts في Obsidian

دي **مش Markdown القياسية**، دي إضافة خاصة بـ Obsidian.

مثلاً:

```md
> [!NOTE]
> دي ملاحظة مهمة.
```

أو:

```md
> [!WARNING]
> خد بالك من النقطة دي.
```

أو:

```md
> [!TIP]
> استخدم `stopPropagation()` لما تحتاج تمنع الـ bubbling.
```

ودي هتخلي Notes بتاعتك شكلها أحسن بكتير.

---

# 🧠 اتعلم Markdown بالترتيب ده

مش محتاج تحفظ 100 حاجة.

ابدأ بالترتيب:

```text
1. Headings
2. Bold / Italic
3. Lists
4. Code
5. Links
6. Images
7. Quotes
8. Tables
9. Checklists
10. Obsidian Links
11. Obsidian Callouts
```

وبعد كده هتكون قادر تكتب **90% من ملفات Markdown اللي هتقابلك**.

ولو هدفك الأساسي **Obsidian + تدوين ملاحظات البرمجة**، فالأهم مش إنك تحفظ Markdown كلها؛ الأهم إنك تتعلم إزاي تعمل **نظام Notes مرتب باستخدام Markdown + Obsidian**.
