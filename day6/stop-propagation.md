# Event: stopPropagation() method

- The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
-  It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed.
-  If you want to stop those behaviors, see the preventDefault() method.
-  It also does not prevent propagation to other event-handlers of the current element.
-   If you want to stop those, see stopImmediatePropagation().

## Syntax
js

stopPropagation()

Parameters

None.
Return value

None.
Examples

See Event Propagation. Also see the example at stopImmediatePropagation()

Specification 
- Dom

---
# `stopPropagation()` في JavaScript

## يعني إيه Event Bubbling؟

لما تعمل `Click` على عنصر موجود داخل عنصر تاني، الـ event ممكن ينتقل من العنصر الداخلي للعنصر الأب.

مثال:

```html
<div id="parent">
    <button id="child">Click me</button>
</div>
```

لو حطينا Event على الاتنين:

```js
parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});
```

ولما تدوس على الـ `button`، النتيجة:

```text
Child
Parent
```

لأن الـ event بدأ من الـ `button`، وبعد كده انتقل للـ `div` الأب.

وده اسمه:

> **Event Bubbling**

---

## `stopPropagation()`

لو مش عايز الـ event يكمل انتشاره للـ parent، بنستخدم:

```js
event.stopPropagation();
```

مثال:

```js
child.addEventListener("click", (event) => {
    console.log("Child");

    event.stopPropagation();
});
```

دلوقتي لما تدوس على الـ button:

```text
Child
```

فقط.

لأن `stopPropagation()` منعت الـ event من إنه يكمل انتشاره للعنصر الأب.

---

# مثال عملي

تخيل عندك Card كلها قابلة للضغط:

```html
<div class="card" id="card">
    <h2>Product</h2>
    <button id="deleteBtn">Delete</button>
</div>
```

والـ Card عليها click:

```js
card.addEventListener("click", () => {
    console.log("Open product");
});
```

والـ Delete button عليه click:

```js
deleteBtn.addEventListener("click", () => {
    console.log("Delete product");
});
```

لو ضغطت على Delete، هيحصل:

```text
Delete product
Open product
```

ليه؟

لأن الـ click عمل **bubbling** من الـ button للـ card.

### الحل

```js
deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Delete product");
});
```

دلوقتي النتيجة:

```text
Delete product
```

فقط.

---

# الفرق بين `stopPropagation()` و `preventDefault()`

مهم جدًا تفرق بينهم.

### `stopPropagation()`

توقف **انتشار الـ event**:

```js
event.stopPropagation();
```

يعني:

> "متخليش الـ event يطلع للعناصر الأب."

---

### `preventDefault()`

تمنع **التصرف الافتراضي للعنصر**:

```js
event.preventDefault();
```

مثلاً:

```html
<a href="https://google.com">Google</a>
```

لو عملت:

```js
link.addEventListener("click", (event) => {
    event.preventDefault();
});
```

اللينك مش هيفتح Google.

---

## الخلاصة

احفظها بالشكل ده:

| Method              | بتعمل إيه؟                            |
| ------------------- | ------------------------------------- |
| `stopPropagation()` | تمنع الـ event من الانتشار للـ parent |
| `preventDefault()`  | تمنع الـ default behavior للعنصر      |

### ببساطة:

```text
stopPropagation()
        ↓
"متخليش الـ event يطلع للأب"

preventDefault()
        ↓
"متخليش العنصر يعمل تصرفه الطبيعي"
```

> **ملاحظة:** `stopPropagation()` لا تعني إلغاء الـ event نفسه؛ هي فقط توقف انتقاله في الـ event propagation path.
