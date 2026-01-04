// Pre-loaded Topics (Admin can add more)
window.BCA_TOPICS = [
    {
        id: 'react-intro',
        title: 'React Introduction',
        category: 'Programming',
        subcategory: 'React',
        content: `
<div class="topic-content">
    <section class="content-section">
        <h2>📚 What is React?</h2>
        <p>React is a JavaScript library for building user interfaces, created by Facebook. It allows developers to create large web applications that use data to change how they appear in a browser.</p>
        
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Component-Based</strong>: Build encapsulated components</li>
            <li><strong>Declarative</strong>: Describe what the UI should look like</li>
            <li><strong>JSX</strong>: JavaScript XML syntax extension</li>
        </ul>
    </section>

    <section class="content-section">
        <h2>💡 First React Component</h2>
        <div class="code-block">
<pre>de class="language-jsx">// App.js
import React from 'react';

function App() {
  return (
    &lt;div className="App"&gt;
      &lt;h1&gt;Hello BCA Students!&lt;/h1&gt;
      &lt;p&gt;Welcome to React Learning&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
        </div>
    </section>

    <section class="content-section">
        <h2>📝 Practice Questions</h2>
        <div class="qa">
            <h4>Q1: What is the difference between state and props?</h4>
            <p><strong>Answer:</strong> Props are read-only and passed from parent, State is mutable and managed within component.</p>
        </div>
    </section>
</div>
        `,
        views: 0,
        bookmarks: false,
        progress: 0
    },
    {
        id: 'arrays-ds',
        title: 'Arrays in Data Structures',
        category: 'Data Structures',
        subcategory: 'Arrays',
        content: `
<div class="topic-content">
    <section class="content-section">
        <h2>📚 Array Fundamentals</h2>
        <p>Arrays are contiguous memory locations that store elements of same data type. They provide constant time access to elements via index.</p>
        
        <h3>Time Complexities:</h3>
        <table class="table">
            <tr><th>Operation</th><th>Time Complexity</th></tr>
            <tr><td>Access</td><td>O(1)</td></tr>
            <tr><td>Search</td><td>O(n)</td></tr>
            <tr><td>Insert/Delete</td><td>O(n)</td></tr>
        </table>
    </section>

    <section class="content-section">
        <h2>💡 Array Implementation</h2>
        <div class="code-block">
<pre>de class="language-javascript">// Array Operations
class ArrayDS {
    constructor(size) {
        this.size = size;
        this.length = 0;
        this.data = new Array(size);
    }
    
    insert(index, value) {
        // Implementation
    }
    
    delete(index) {
        // Implementation
    }
}</code></pre>
        </div>
    </section>
</div>
        `,
        views: 0,
        bookmarks: false,
        progress: 0
    },
    {
        id: 'html-basics',
        title: 'HTML5 Fundamentals',
        category: 'Web Dev',
        subcategory: 'HTML',
        content: `
<div class="topic-content">
    <section class="content-section">
        <h2>📚 HTML5 Semantic Elements</h2>
        <p>HTML5 introduced semantic elements that clearly describe content:</p>
        <ul>
            <li>&lt;header&gt; - Page header</li>
            <li>&lt;nav&gt; - Navigation links</li>
            <li>&lt;main&gt; - Main content</li>
            <li>&lt;article&gt; - Self-contained content</li>
            <li>&lt;section&gt; - Thematic grouping</li>
        </ul>
    </section>

    <section class="content-section">
        <h2>💡 Complete HTML Template</h2>
        <div class="code-block">
<pre>de class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;BCA Notes&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;&lt;h1&gt;BCA Study Notes&lt;/h1&gt;&lt;/header&gt;
    &lt;main&gt;
        &lt;article&gt;Your content here&lt;/article&gt;
    &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
    </section>
</div>
        `,
        views: 0,
        bookmarks: false,
        progress: 0
    }
    // Add more topics here...
];
