# User Profile Avatar

## Installation

```bash
npm i user-profile-avatar
yarn add user-profile-avatar
```

## Usage


```js
import { Avatar } from 'user-profile-avatar'
```

## Simple example

```js
<Avatar
  src="image link"
  alt="profile"
  size={80}
/>,
```

### Render prop example

```js
<Avatar
  src="image link"
  alt="profile"
  size={'Enter the size'}
/>,
```

#### Complete example

```js
import { Avatar } from 'user-profile-avatar'

function App() {
  return (
    <div className="App">
      <Avatar 
        src='Enter your image Link'
        alt='profile'
        size={80}
      />
    </div>
  );
}

export default App;

```