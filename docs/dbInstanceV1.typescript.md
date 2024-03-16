# `dbInstanceV1` Submodule <a name="`dbInstanceV1` Submodule" id="@ithings/cdktf-provider-openstack.dbInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceV1 <a name="DbInstanceV1" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1 openstack_db_instance_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1(scope: Construct, id: string, config: DbInstanceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config">DbInstanceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config">DbInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabase` <a name="putDatabase" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase"></a>

```typescript
public putDatabase(value: IResolvable | DbInstanceV1Database[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]

---

##### `putDatastore` <a name="putDatastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore"></a>

```typescript
public putDatastore(value: DbInstanceV1Datastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

---

##### `putNetwork` <a name="putNetwork" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | DbInstanceV1Network[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts"></a>

```typescript
public putTimeouts(value: DbInstanceV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

---

##### `putUser` <a name="putUser" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser"></a>

```typescript
public putUser(value: IResolvable | DbInstanceV1User[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetFlavorId` <a name="resetFlavorId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetFlavorId"></a>

```typescript
public resetFlavorId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUser` <a name="resetUser" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DbInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

dbInstanceV1.DbInstanceV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

dbInstanceV1.DbInstanceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

dbInstanceV1.DbInstanceV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

dbInstanceV1.DbInstanceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DbInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DbInstanceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DbInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DbInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.database">database</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList">DbInstanceV1DatabaseList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastore">datastore</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference">DbInstanceV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList">DbInstanceV1NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference">DbInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.user">user</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList">DbInstanceV1UserList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.databaseInput">databaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.userInput">userInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.size">size</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `database`<sup>Required</sup> <a name="database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.database"></a>

```typescript
public readonly database: DbInstanceV1DatabaseList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList">DbInstanceV1DatabaseList</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastore"></a>

```typescript
public readonly datastore: DbInstanceV1DatastoreOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference">DbInstanceV1DatastoreOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.network"></a>

```typescript
public readonly network: DbInstanceV1NetworkList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList">DbInstanceV1NetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeouts"></a>

```typescript
public readonly timeouts: DbInstanceV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference">DbInstanceV1TimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.user"></a>

```typescript
public readonly user: DbInstanceV1UserList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList">DbInstanceV1UserList</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | DbInstanceV1Database[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: DbInstanceV1Datastore;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | DbInstanceV1Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DbInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.userInput"></a>

```typescript
public readonly userInput: IResolvable | DbInstanceV1User[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceV1Config <a name="DbInstanceV1Config" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1Config: dbInstanceV1.DbInstanceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.datastore">datastore</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.database">database</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]</code> | database block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.user">user</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]</code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.datastore"></a>

```typescript
public readonly datastore: DbInstanceV1Datastore;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#datastore DbInstanceV1#datastore}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.database"></a>

```typescript
public readonly database: IResolvable | DbInstanceV1Database[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#database DbInstanceV1#database}

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.network"></a>

```typescript
public readonly network: IResolvable | DbInstanceV1Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#network DbInstanceV1#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: DbInstanceV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#timeouts DbInstanceV1#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.user"></a>

```typescript
public readonly user: IResolvable | DbInstanceV1User[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#user DbInstanceV1#user}

---

### DbInstanceV1Database <a name="DbInstanceV1Database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1Database: dbInstanceV1.DbInstanceV1Database = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.charset">charset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#charset DbInstanceV1#charset}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.collate">collate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#collate DbInstanceV1#collate}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#charset DbInstanceV1#charset}.

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#collate DbInstanceV1#collate}.

---

### DbInstanceV1Datastore <a name="DbInstanceV1Datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1Datastore: dbInstanceV1.DbInstanceV1Datastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#type DbInstanceV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#version DbInstanceV1#version}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#type DbInstanceV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#version DbInstanceV1#version}.

---

### DbInstanceV1Network <a name="DbInstanceV1Network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1Network: dbInstanceV1.DbInstanceV1Network = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v4 DbInstanceV1#fixed_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v6 DbInstanceV1#fixed_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#port DbInstanceV1#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.uuid">uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#uuid DbInstanceV1#uuid}. |

---

##### `fixedIpV4`<sup>Optional</sup> <a name="fixedIpV4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v4 DbInstanceV1#fixed_ip_v4}.

---

##### `fixedIpV6`<sup>Optional</sup> <a name="fixedIpV6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v6 DbInstanceV1#fixed_ip_v6}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#port DbInstanceV1#port}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#uuid DbInstanceV1#uuid}.

---

### DbInstanceV1Timeouts <a name="DbInstanceV1Timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1Timeouts: dbInstanceV1.DbInstanceV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#create DbInstanceV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#delete DbInstanceV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#create DbInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#delete DbInstanceV1#delete}.

---

### DbInstanceV1User <a name="DbInstanceV1User" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

const dbInstanceV1User: dbInstanceV1.DbInstanceV1User = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.databases">databases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#databases DbInstanceV1#databases}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#host DbInstanceV1#host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#password DbInstanceV1#password}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.databases"></a>

```typescript
public readonly databases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#databases DbInstanceV1#databases}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#host DbInstanceV1#host}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#password DbInstanceV1#password}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceV1DatabaseList <a name="DbInstanceV1DatabaseList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1DatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get"></a>

```typescript
public get(index: number): DbInstanceV1DatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1Database[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>[]

---


### DbInstanceV1DatabaseOutputReference <a name="DbInstanceV1DatabaseOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1DatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCharset">resetCharset</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCollate">resetCollate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCharset` <a name="resetCharset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCharset"></a>

```typescript
public resetCharset(): void
```

##### `resetCollate` <a name="resetCollate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCollate"></a>

```typescript
public resetCollate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charsetInput">charsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collateInput">collateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collate">collate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charsetInput`<sup>Optional</sup> <a name="charsetInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charsetInput"></a>

```typescript
public readonly charsetInput: string;
```

- *Type:* string

---

##### `collateInput`<sup>Optional</sup> <a name="collateInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collateInput"></a>

```typescript
public readonly collateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `charset`<sup>Required</sup> <a name="charset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `collate`<sup>Required</sup> <a name="collate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1Database;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>

---


### DbInstanceV1DatastoreOutputReference <a name="DbInstanceV1DatastoreOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1DatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbInstanceV1Datastore;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

---


### DbInstanceV1NetworkList <a name="DbInstanceV1NetworkList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1NetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get"></a>

```typescript
public get(index: number): DbInstanceV1NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>[]

---


### DbInstanceV1NetworkOutputReference <a name="DbInstanceV1NetworkOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1NetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV4">resetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV6">resetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedIpV4` <a name="resetFixedIpV4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV4"></a>

```typescript
public resetFixedIpV4(): void
```

##### `resetFixedIpV6` <a name="resetFixedIpV6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV6"></a>

```typescript
public resetFixedIpV6(): void
```

##### `resetPort` <a name="resetPort" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetUuid` <a name="resetUuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4Input">fixedIpV4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6Input">fixedIpV6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIpV4Input`<sup>Optional</sup> <a name="fixedIpV4Input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4Input"></a>

```typescript
public readonly fixedIpV4Input: string;
```

- *Type:* string

---

##### `fixedIpV6Input`<sup>Optional</sup> <a name="fixedIpV6Input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6Input"></a>

```typescript
public readonly fixedIpV6Input: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1Network;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>

---


### DbInstanceV1TimeoutsOutputReference <a name="DbInstanceV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

---


### DbInstanceV1UserList <a name="DbInstanceV1UserList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1UserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get"></a>

```typescript
public get(index: number): DbInstanceV1UserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1User[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>[]

---


### DbInstanceV1UserOutputReference <a name="DbInstanceV1UserOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer"></a>

```typescript
import { dbInstanceV1 } from '@ithings/cdktf-provider-openstack'

new dbInstanceV1.DbInstanceV1UserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetDatabases">resetDatabases</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetPassword">resetPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabases` <a name="resetDatabases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetDatabases"></a>

```typescript
public resetDatabases(): void
```

##### `resetHost` <a name="resetHost" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPassword` <a name="resetPassword" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databasesInput">databasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databases">databases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databasesInput`<sup>Optional</sup> <a name="databasesInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databasesInput"></a>

```typescript
public readonly databasesInput: string[];
```

- *Type:* string[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `databases`<sup>Required</sup> <a name="databases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databases"></a>

```typescript
public readonly databases: string[];
```

- *Type:* string[]

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbInstanceV1User;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>

---



